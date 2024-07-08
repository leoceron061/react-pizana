import FuseScrollbars from '@fuse/core/FuseScrollbars';
import _ from '@lodash';
import Checkbox from '@mui/material/Checkbox';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectProducts } from '../store/productsSlice';
import ProductsTableHead from './ProductsTableHead';
import { constants } from '../../../../constants';
import {} from '../../Login_v2/Login_v2'
import Swal from 'sweetalert2'


function ProductsTable(props) {
  const products = useSelector(selectProducts);
  const searchText = useSelector(({ eCommerceApp }) => eCommerceApp.products.searchText);
  const [selected, setSelected] = useState([]);
  const [data, setData] = useState(products);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [order, setOrder] = useState({
    direction: 'asc',
    id: null,
  });

 

  async function getAllUsers() {
    try {
      const response = await axios.get(`${constants.URLLOCAL}/user/all`);
      const data = await response.data;
      console.log("dataaaa!!!",data)
      setData(data)
    } catch (error) {
      console.log(error)
    }
  }
  
  
  useEffect(() => {
    getAllUsers()
    
    if (searchText.length !== 0) {
      setData(
        _.filter(products, (item) => item.nombrecliente.toLowerCase().includes(searchText.toLowerCase()) 

          // item.description.toLowerCase().includes(searchText.toLowerCase()) ||
          // item.cost_rate_temp.toLowerCase().includes(searchText.toLowerCase()) ||
          // item.unit_temp.toLowerCase().includes(searchText.toLowerCase())
        )
      );
      setPage(0);
    } else {
      setData(products);
    }
  }, [products, searchText]);

  function handleRequestSort(event, property) {
    const id = property;
    let direction = 'desc';

    if (order.id === property && order.direction === 'desc') {
      direction = 'asc';
    }

    setOrder({
      direction,
      id,
    });
  }
  
  function handleSelectAllClick(event) {
    if (event.target.checked) {
      setSelected(data.map((n) => n.id_user));

      return;
    }
    setSelected([]);
  }

  function handleDeselect() {
    setSelected([]);
  }

  const mostrarAlerta=()=>{
    Swal.fire("No eres administrador")
  }
  
  const handleClick=async(item)=> {
   
    
    try {
    props.history.push(`/users/hoja/${item.id_user}/${item.nombrecliente}`);
  } catch (error) {
    console.error(error.message);
  }
}

  function handleCheck(event, id) {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  }

  function handleChangePage(event, value) {
    setPage(value);
  }

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(event.target.value);
  }


  if (data.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.1 } }}
        className="flex flex-1 items-center justify-center h-full"
      >
        <Typography  variant="h6" style={{color:"black"}}>
          No hay clientes!
        </Typography>
      </motion.div>
    );
  }

  return (
    <div className="w-full flex flex-col">


      <FuseScrollbars className="flex-grow overflow-x-auto">
        <Table stickyHeader className="min-w-xl" aria-labelledby="tableTitle">
          <ProductsTableHead
            selectedProductIds={selected}
            order={order}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            rowCount={data.length}
            onMenuItemClick={handleDeselect}
          />

          <TableBody>
            {_.orderBy(
              data,
              [
                (o) => {
                  switch (order.id_user) {
                    case 'category': {
                      return o.category[0];
                    }
                    default: {
                      return o[order.id_user];
                    }
                  }
                },
              ],
              [order.direction]
            )
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

              //desde aqui entra solo un 1 objeto a visualizar
              .map((n) => {
                const isSelected = selected.indexOf(n.id_user) !== -1;

                return (
                  <TableRow style={{backgroundColor:"#FFFFFF"}}
                    className="h-6 cursor-pointer"
                    hover
                    role="checkbox"
                    aria-checked={isSelected}
                    tabIndex={-1}
                    key={n.id}
                    selected={isSelected}
                    onClick={(event) => handleClick(n)}
                  >
                    
                    <TableCell className="w-40 md:w-64 text-center" padding="none" >
                      <Checkbox
                        checked={isSelected}
                        onClick={(event) => event.stopPropagation()}
                        onChange={(event) => handleCheck(event, n.id)}
                      />
                    </TableCell >

                    {/* componentes que renderiza cada fila */}

                    <TableCell className="p-4 md:p-16" component="th" scope="row">
                      {n.id_user}
                    </TableCell>

                    <TableCell className="p-4 md:p-16 truncate" component="th" scope="row">
                      {n.nombrecliente}
                    </TableCell>

                    <TableCell className="p-4 md:p-16" component="th" scope="row" >
                      {n.apellidocliente}
                    </TableCell>

                    <TableCell className="p-4 md:p-16" component="th" scope="row" >
                      {n.telefono}
                    </TableCell>

                    <TableCell className="p-4 md:p-16" component="th" scope="row" >
                      {n.email}
                    </TableCell>

                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </FuseScrollbars> 

      <TablePagination 
        className="flex-shrink-0 border-t-1"
        component="div"

        // cuenta cuantos estan mostrando enla interfaz 

        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          'aria-label': 'Previous Page',
        }}
        nextIconButtonProps={{
          'aria-label': 'Next Page',
        }}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}

export default withRouter(ProductsTable);
