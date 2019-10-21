import React, { useState, useRef } from "react"
import { Nav } from "../styledComponents/Nav"
import Bond from "./Bond"
import Brands from "./Brands"
import Mens from "./Mens"
import Womens from "./Womens"
import Accessories, { PureAccessories } from "./Accessories"

const NavBar = () => {
  const [isBondOpen, setBondOpen] = useState(false)
  const [isMensOpen, setMensOpen] = useState(false)
  const [isWomensOpen, setWomensOpen] = useState(false)
  const [isAccessoriesOpen, setAccessoriesOpen] = useState(false)
  const [isBrandsOpen, setBrandsOpen] = useState(false)

  const cancelAllDropDowns = () => {
    setBondOpen(false)
    setMensOpen(false)
    setWomensOpen(false)
    setAccessoriesOpen(false)
    setBrandsOpen(false)
  }

  const node = useRef()

  return (
    <>
      <Nav>
        <button
          className={`nav-toggler brands ${isBrandsOpen && "selected"}`}
          onClick={() => setBrandsOpen(true)}
        >
          <p className="brands">brands</p>
        </button>
        <button
          className={`nav-toggler ${isMensOpen && "selected"}`}
          onClick={() => setMensOpen(true)}
        >
          <p className="men">men</p>
        </button>
        <button
          className={`nav-toggler ${isWomensOpen && "selected"}`}
          onClick={() => setWomensOpen(true)}
        >
          <p className="women">women</p>
        </button>
        <button
          className={`nav-toggler ${isAccessoriesOpen && "selected"}`}
          onClick={() => setAccessoriesOpen(true)}
        >
          <p className="accessories">accessories</p>
        </button>
        <button
          data-testid="bond"
          className={`nav-toggler ${isBondOpen && "selected"}`}
          onClick={() => setBondOpen(true)}
        >
          <p className="bond">Bond @ 25</p>
        </button>
      </Nav>
      <div ref={node} style={{ gridColumn: "2/8" }}>
        <Bond isOpen={isBondOpen} remove={cancelAllDropDowns} node={node} />
        <Brands isOpen={isBrandsOpen} remove={cancelAllDropDowns} node={node} />
        <Mens isOpen={isMensOpen} remove={cancelAllDropDowns} node={node} />
        <Womens isOpen={isWomensOpen} remove={cancelAllDropDowns} node={node} />
        <Accessories
          isOpen={isAccessoriesOpen}
          remove={cancelAllDropDowns}
          node={node}
        />
      </div>
    </>
  )
}

export const PureNavBar = () => {
  const [isBondOpen, setBondOpen] = useState(false)
  const [isBrandsOpen, setBrandsOpen] = useState(false)
  const [isAccessoriesOpen, setAccessoriesOpen] = useState(false)

  const cancelAllDropDowns = () => {
    setBondOpen(false)
    setBrandsOpen(false)
    setAccessoriesOpen(false)
  }

  const node = useRef()

  return (
    <>
      <Nav data-testid="nav-bar">
        <button
          data-testid="bond-toggler"
          className={`nav-toggler ${isBondOpen && "selected"}`}
          onClick={() => setBondOpen(true)}
        >
          <p className="bond">Bond @ 25</p>
        </button>
        <button
          data-testid="brands-toggler"
          className={`nav-toggler ${isBrandsOpen && "selected"}`}
          onClick={() => setBrandsOpen(true)}
        >
          <p className="brand">Bond @ 25</p>
        </button>
        <button
          data-testid="accessories-toggler"
          className={`nav-toggler ${isBrandsOpen && "selected"}`}
          onClick={() => setAccessoriesOpen(true)}
        >
          <p className="accessories">Bond @ 25</p>
        </button>
      </Nav>
      <div ref={node}>
        <Bond isOpen={isBondOpen} remove={cancelAllDropDowns} node={node} />
        <Brands isOpen={isBrandsOpen} remove={cancelAllDropDowns} node={node} />
        <PureAccessories
          isOpen={isAccessoriesOpen}
          remove={cancelAllDropDowns}
          node={node}
        />
      </div>
    </>
  )
}

export default NavBar
