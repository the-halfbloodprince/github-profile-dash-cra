import React, { FC } from 'react'
import { Select, SelectChangeEvent, MenuItem } from '@mui/material'

type Props = {
    itemsPerPage: number
    handleItemsPerPageChange: (e: SelectChangeEvent) => void
    availableValuesForItemsPerPage: string[]
}

const ItemsPerPageSelect: FC<Props> = ({ 
    
    itemsPerPage, 
    handleItemsPerPageChange,
    availableValuesForItemsPerPage

}) => {

    return (
        <Select
            value={itemsPerPage.toString()}
            label="Items"
            onChange={handleItemsPerPageChange}
            sx={{
                height: 'fit-content'
            }}
        >

            {/* the options */}
            
            {
                // loop through all the avialable sizes for itemsPerPage
                availableValuesForItemsPerPage.map((size) => (
                    <MenuItem value={size}>{size}</MenuItem>
                ))
            }
        </Select>
    )
}

export default ItemsPerPageSelect