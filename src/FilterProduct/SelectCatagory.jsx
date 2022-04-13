import { FormControl, Select, MenuItem } from "@material-ui/core";
import "./style.css"

const SelectCatagory = (catagories, selectedCatagory, onChange) => (
    <FormControl className="formControl">
        <Select value={selectedCatagory.id} onChange={onChange}>
          {catagories.map((catagory) => (
              <MenuItem key={catagory.id} value={catagory.id}>
                {catagory.name}
                  </MenuItem>
          ))}
        </Select>
    </FormControl>
)

export default SelectCatagory;