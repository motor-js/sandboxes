export const light = {
  control: styles => ({ ...styles }),
  option: styles => ({ ...styles }),
  multiValue: styles => ({ ...styles  }),
  multiValueLabel: styles => ({ ...styles }),
  multiValueRemove: styles => ({ ...styles }),
}

export const dark = {
  control: styles => ({ ...styles, backgroundColor: "#1A202C", borderColor: "#EDEDEE" }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) =>({ 
    ...styles, 
    backgroundColor: "#1A202C", 
    borderColor: "#EDEDEE", 
    color: "#EDEDEE",
    backgroundColor: isSelected ? "#2D3748" : "#1A202C"
  }),
  multiValue: styles => ({ ...styles, backgroundColor: "#2D3748",  }),
  multiValueLabel: styles => ({ ...styles, color: "#EDEDEE" }),
  multiValueRemove: styles => ({ ...styles, color: "#EDEDEE" }),
}
