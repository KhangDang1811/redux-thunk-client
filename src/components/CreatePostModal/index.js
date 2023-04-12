import { Button, Modal, TextareaAutosize, TextField } from '@material-ui/core';
import FileBase64 from 'react-file-base64';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { modalState$ } from '../../redux/selectors';
import useStyles from './styles';
import { createPost, hideModal } from '../../redux/actions';

export default function CreatePostModal() {
  const [data, setData] = React.useState({
    ProductName: '',
    SupplierID: '',
    CategoryID: '',
    QuantityPerUnit: '',
    UnitPrice: '',
  });
  const dispatch = useDispatch();
  const { isShow } = useSelector(modalState$);
  const classes = useStyles();

  const onClose = React.useCallback(() => {
    dispatch(hideModal());
    setData({
      ProductName: '',
      SupplierID: '',
      CategoryID: '',
      QuantityPerUnit: '',
      UnitPrice: '',
    });
  }, [dispatch]);

  const onSubmit = React.useCallback(() => {
    dispatch(createPost.createPostRequest(data));
    onClose();
  }, [data, dispatch, onClose]);

  const body = (
    <div className={classes.paper} id='simple-modal-title'>
      <h2>Create New Product</h2>
      <form noValidate autoComplete='off' className={classes.form}>
        <TextField
          className={classes.ProductName}
          required
          label='ProductName'
          value={data.ProductName}
          onChange={(e) => setData({ ...data, ProductName: e.target.value })}
        />
         <TextField
          className={classes.SupplierID}
          required
          label='SupplierID'
          value={data.SupplierID}
          onChange={(e) => setData({ ...data, SupplierID: e.target.value })}
        />
         <TextField
          className={classes.CategoryID}
          required
          label='CategoryID'
          value={data.CategoryID}
          onChange={(e) => setData({ ...data, CategoryID: e.target.value })}
        />
         <TextField
          className={classes.QuantityPerUnit}
          required
          label='QuantityPerUnit'
          value={data.QuantityPerUnit}
          onChange={(e) => setData({ ...data, QuantityPerUnit: e.target.value })}
        />
         <TextField
          className={classes.UnitPrice}
          required
          label='UnitPrice'
          value={data.UnitPrice}
          onChange={(e) => setData({ ...data, UnitPrice: e.target.value })}
        />
      
        <div className={classes.footer}>
          <Button
            variant='contained'
            color='primary'
            component='span'
            fullWidth
            onClick={onSubmit}
          >
            Create
          </Button>
        </div>
      </form>
    </div>
  );

  return (
    <div>
      <Modal open={isShow} onClose={onClose}>
        {body}
      </Modal>
    </div>
  );
}
