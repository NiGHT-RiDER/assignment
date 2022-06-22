import create from 'zustand';

const useStore = create(set => ({
    checkboxes: [
        { id: 'bike', label: 'bike', value: false },
        { id: 'boat', label: 'boat', value: false },
        { id: 'car', label: 'car', value: false },
        { id: 'train', label: 'train', value: false },
    ],
    updateCheckbox: ({id ,value}) =>
        set(state => ({
            checkboxes:
                state.checkboxes.map(element => {
                    if (element && element.id && element.id === id) {
                        const valueToBeSet = value == 'on' && !element.value 
                        return { ...element, value: valueToBeSet }
                    } else {
                        return element
                    }
                })
        }))
}));

export const useCheckboxStore = useStore;
