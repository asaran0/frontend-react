// export const loadState = () => {
//     try {
//         const serializedState = localStorage.getItem('reduxState');
//         if (serializedState === null) return undefined;
//         return JSON.parse(serializedState);
//     } catch (err) {
//         return undefined;
//     }
// }

// export const saveState = (state) => {
//     try {
//         const serializedState = JSON.stringify(state);
//         localStorage.setItemp('reduxState', serializedState);
//     } catch (err) {
//         console.log("Could not save state", err);
//     }
// }