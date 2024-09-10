import React from 'react'
import './Drawer.scss'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import FormCheck from 'react-bootstrap/FormCheck';
export default function Drawer({setFillter,ColorData,fliterColor,setFillterColorFunc}) {
  return (
    <div className='filter_drawer'>
        <header className="header">
          <span className="header_title"><h5>FILTERS</h5></span>
          <span className="closebtn" onClick={setFillter}>
            X
          </span>
        </header>
        <div className='filter_contents'>
            <div className='col-12 colorscontain'>
                <label className='subheader'>COLORS</label>
                <div className="ColorsDiv">
                    <ul className="colorList">
                        {ColorData.map((element,index) => (
                            <li className="LitsItems" key={index} style={fliterColor.includes(element) ? {border: '1px solid black', borderRadius: 50, padding: '2px'}: { padding: '2px'}} onClick={() => setFillterColorFunc(element)}>
                            <LinkWithTooltip tooltip={element} id="tooltip-1" />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='col-12 colorscontain'>
                <label className='subheader'>FABRIC STYLE</label>
                <div className="FabricDiv">
                    <FormCheck className='fabricCheck' aria-label="option 1" label="Art Slick" />
                    <FormCheck className='fabricCheck' aria-label="option 1" label="Cotton" />
                    <FormCheck className='fabricCheck' aria-label="option 1" label="Cotton Cambric" />
                    <FormCheck className='fabricCheck' aria-label="option 1" label="Crepe" />
                    <FormCheck className='fabricCheck' aria-label="option 1" label="Leather" />
                    <FormCheck className='fabricCheck' aria-label="option 1" label="Slick" />
                </div>
            </div>
        </div>
        <div className='bottomDiv'>
            <a href type='button' className='bottomBtn' onClick={setFillter}>SEE RESULTS</a>
        </div>
    </div>
  )
}

function LinkWithTooltip({ id, tooltip }) {
    return (
      <OverlayTrigger
        overlay={<Tooltip id={id}>{tooltip}</Tooltip>}
        placement="top"
        delayShow={300}
        delayHide={150}
      >
        <div className='rounded_color' style={{backgroundColor: tooltip}} />
      </OverlayTrigger>
    );
  }