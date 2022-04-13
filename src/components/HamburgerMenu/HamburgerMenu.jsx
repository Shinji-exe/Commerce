// import React from 'react'
// import { IconButton } from '@material-ui/core';
// import { Menu } from '@material-ui/core';
// import { MenuItem } from '@material-ui/core';
// import { MoreVert } from '@material-ui/icons';
// import {ShoppingCart} from '@material-ui/icons'
// import {Badge} from '@material-ui/core'
// import { Link } from 'react-router-dom';
// import "./Hamburger.css"

// const options = [
//     <Link to = "/">Home</Link>,
//     <Link to = "/products">Product</Link>,
//     <Link to = "/cart">Cart</Link>
// ]

// const ITEM_HEIGHT = 48;

// export default function HamburgerMenu() {
//     const [anchorEl, setAnchorEl] = React.useState(null);
//     const open = Boolean(anchorEl);
  
//     const handleClick = (event) => {
//       setAnchorEl(event.currentTarget);
//     };
  
//     const handleClose = () => {
//       setAnchorEl(null);
//     };
  
//   return (
//     <div className="bar">
//       <IconButton
//         aria-label="more"
//         aria-controls="long-menu"
//         aria-haspopup="true"
//         onClick={handleClick}
//       >
//         <MoreVert className="icon-color" />
//       </IconButton>
//       <Menu
//         id="long-menu"
//         anchorEl={anchorEl}
//         keepMounted
//         open={open}
//         onClose={handleClose}
//         PaperProps={{
//           style: {
//             maxHeight: ITEM_HEIGHT * 4.5,
//             width: '20ch',
//           },
//         }}
//       >
//         {options.map((option, index) => (
//           <MenuItem key={index} selected={option === 'Pyxis'} onClick={handleClose}>
//             <div className="mobile-nav-text">{option}</div>
//           </MenuItem>
//         ))}
//       </Menu>
//     </div>
//   )
// }
