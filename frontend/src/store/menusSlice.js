import { createSlice } from '@reduxjs/toolkit'

export const menusSlice = createSlice({
    name: 'menus',
    initialState: {
        menus: [],
        order: 'asc',
        searchQuery: '',
        loading: false
    },
    reducers: {
        setMenus: (state, menus) => {
            state.menus = menus.payload;
        },
        setSearchQuery: (state, query) => {
            state.searchQuery = query.payload
        },
        toggleOrder: (state) => {
            state.order = state.order === 'asc' ? 'desc' : 'asc'
        },
        setLoading: (state) => {
            state.loading = true
        },
        unsetLoading: (state) => {
            state.loading = false
        }
    }
})

export const getMenus = (state) => {
    return state.menus.menus || [];
};

export const getLoading = (state) => {
    return state.menus.loading;
};
export const { setMenus, setSearchQuery, toggleOrder, setLoading, unsetLoading } = menusSlice.actions

export const notifyError = (err) => {
  console.log(err);
}

export const fetchMenus = () => async (dispatch, getState) => {
    dispatch(setLoading());
    const query = getState().menus.searchQuery;
    const order = getState().menus.order;
    try {
        const req = await fetch(
            'http://localhost:3000/menus?' + new URLSearchParams({query, order}),
            {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            }
        );

        const resp = await req.json();
        dispatch(setMenus(resp));
        dispatch(unsetLoading());
    } catch (err) {
        dispatch(unsetLoading());
        notifyError(err);
    }
}

export const createMenu = (name, price, description) => async dispatch => {
    dispatch(setLoading())
    try {
        await fetch(
            'http://localhost:3000/menus',
            {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name, 
                    price, 
                    description
                })
            }
        );
        dispatch(unsetLoading());
        fetchMenus();
    } catch (err) {
        dispatch(unsetLoading());
        notifyError(err);
    }
}

export const deleteMenu = (id) => async dispatch => {
    dispatch(setLoading())
    try {
        const req = await fetch(
            `http://localhost:3000/menus/${id}`,
            {
                method: 'DELETE',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            }
        );

        dispatch(unsetLoading());
        fetchMenus();
    } catch (err) {
        dispatch(unsetLoading());
        notifyError(err);
    }
}

export default menusSlice.reducer