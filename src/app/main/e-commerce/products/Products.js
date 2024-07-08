import FusePageCarded from '@fuse/core/FusePageCarded';
import withReducer from 'app/store/withReducer';
import { styled } from '@mui/material/styles';
import reducer from '../store';
import ProductsHeader from './ProductsHeader';
import ProductsTable from './ProductsTable';
import Swal from 'sweetalert2'
const Root = styled(FusePageCarded)(({ theme }) => ({
  '& .FusePageCarded-header': {
    minHeight: 50,
    height: 50,
    alignItems: 'center',
    [theme.breakpoints.up('sx')]: {
      minHeight: 50,
      height: 50,
    },
  },
  '& .FusePageCarded-content': {
    display: 'flex',
  },
  '& .FusePageCarded-contentCard': {
    overflow: 'hidden',
  },
}));
const pay=localStorage.getItem('result');
  const payload=JSON.parse(pay);

 const mostrarAlerta=()=>{
    Swal.fire({
      title:'No eres Admin',
      icon: 'warning',
      html:
      '<a href="/academy/courses">Volver a inicio</a> '
    })
  }
function Products() {
  
  return( 
    (payload.payload.user_type=='admin')?
  <Root header={<ProductsHeader />} content= {<ProductsTable />} innerScroll />:<Root header={<ProductsHeader />}innerScroll />

  )
}

export default withReducer('eCommerceApp', reducer)(Products);
