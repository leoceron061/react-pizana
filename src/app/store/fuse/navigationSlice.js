import { createSelector, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import navigationConfig from 'app/fuse-configs/navigationConfig';
import FuseUtils from '@fuse/utils';
import i18next from 'i18next';
import _ from '@lodash';
import Swal from 'sweetalert2'
const navigationAdapter = createEntityAdapter();
const emptyInitialState = navigationAdapter.getInitialState();
const initialState = navigationAdapter.upsertMany(emptyInitialState, navigationConfig);

export const appendNavigationItem = (item, parentId) => (dispatch, getState) => {
  const navigation = selectNavigationAll(getState());
  return dispatch(setNavigation(FuseUtils.appendNavItem(navigation, item, parentId)));
};

export const prependNavigationItem = (item, parentId) => (dispatch, getState) => {
  const navigation = selectNavigationAll(getState());

  return dispatch(setNavigation(FuseUtils.prependNavItem(navigation, item, parentId)));
}; 

export const updateNavigationItem = (id, item) => (dispatch, getState) => {
  const navigation = selectNavigationAll(getState());

  return dispatch(setNavigation(FuseUtils.updateNavItem(navigation, id, item)));
};

export const removeNavigationItem = (id) => (dispatch, getState) => {
  const navigation = selectNavigationAll(getState());
  return dispatch(setNavigation(FuseUtils.removeNavItem(navigation, id)));
};

export const {
  selectAll: selectNavigationAll,
  selectIds: selectNavigationIds,
  selectById: selectNavigationItemById,
} = navigationAdapter.getSelectors((state) => state.fuse.navigation);

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setNavigation: navigationAdapter.setAll,
    resetNavigation: (state, action) => initialState,
  },
});

export const { setNavigation, resetNavigation } = navigationSlice.actions;

const getUserRole = (state) => state.auth.user.role;

const pay = localStorage.getItem('result');
const payload = JSON.parse(pay);

const mostrarAlerta=()=>{
  Swal.fire("Sus datos se guardaron satisfactoriamente ")
}

export const selectNavigation = createSelector(
  [selectNavigationAll, ({ i18n }) => i18n.language, getUserRole],
  (navigation, language, userRole) => {
    
    function setTranslationValues(data) {
      
      // loop through every object in the array
      console.log("daaaaaataaanavigation",data)
      
      return data.map((item) => {
        console.log("ccccccc",item.url)
      
        if(payload.payload.user_type!='admin'){
          if(item.url=="/users"||item.url=="/calendar"||item.url=="/file-manager")
            {
              
              item.url = "/aaa"
              
            }
            
          } 
        

        
        if (item.translate && item.title) {
          item.title = i18next.t(`navigation:${item.translate}`);
          console.log("iteeeeeeeeeem",item.title)
        }

        // see if there is a children node
        if (item.children) {
          
          // run this function recursively on the children array
          item.children = setTranslationValues(item.children);
        }
        console.log("iiiiiiiiitem",item)

       
        return item;
        
      });
    
    
    }

    return setTranslationValues(
      _.merge(
        [],
        FuseUtils.filterRecursive(navigation, (item) =>
          FuseUtils.hasPermission(item.auth, userRole)
        )
      )
    );
  }
);

export const selectFlatNavigation = createSelector([selectNavigation], (navigation) =>
  FuseUtils.getFlatNavigation(navigation)
);



export default navigationSlice.reducer;
