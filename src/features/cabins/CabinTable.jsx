// import styled from 'styled-components';
import Spinner from '../../ui/Spinner';
import CabinRow from './CabinRow';
import { useCabins } from './useCabins';
import Table from '../../ui/Table';
import Menus from '../../ui/Menus';
import { useSearchParams } from 'react-router-dom';
import Empty from '../../ui/Empty';

function CabinTable() {
  const { isPending, cabins } = useCabins();
  const [searchParams] = useSearchParams();

  if (isPending) return <Spinner />;
  if (cabins?.length === 0) return <Empty resourceName='cabins' />; // Safe check with optional chaining

  // 1) FILTER
  const filterValue = searchParams.get('discount') || 'all';

  let filteredCabins;
  if (filterValue === 'all') filteredCabins = cabins;
  if (filterValue === 'no-discount')
    filteredCabins = cabins.filter((cabin) => cabin.discount === 0);
  if (filterValue === 'with-discount')
    filteredCabins = cabins.filter((cabin) => cabin.discount > 0);

  // 2) SORT
  const sortBy = searchParams.get('sortBy') || 'startDate-asc';
  const [field, direction] = sortBy.split('-');
  const modifier = direction === 'asc' ? 1 : -1;
  const sortedCabins = filteredCabins.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  return (
    <Menus>
      <Table columns='0.6fr 1.8fr 2.2fr 1fr 1fr 1fr'>
        <Table.Header>
          <div></div>

          <div className=''>Cabin</div>
          <div className=''>Capacity</div>
          <div className=''>Price</div>
          <div className=''>Discount</div>
        </Table.Header>
        <Table.Body
          data={sortedCabins}
          // data={cabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  );
}

export default CabinTable;

// function CabinTable() {
//   const { isPending, cabins } = useCabins();
//   if (isPending) return <Spinner />;
//   return (
//     <Table role='table'>
//       <TableHeader role='row'>
//         <div className=''></div>
//         <div className=''>Cabin</div>
//         <div className=''>Capacity</div>
//         <div className=''>Price</div>
//         <div className=''>Discount</div>
//       </TableHeader>
//       {cabins.map((cabin) => (
//         <CabinRow cabin={cabin} key={cabin.id} />
//       ))}
//     </Table>
//   );
// }

// export default CabinTable;
