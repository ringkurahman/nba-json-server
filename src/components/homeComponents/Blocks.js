import React from 'react'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'


const generateBlocks = (blocks) =>
  blocks
    ? blocks.map((block) => (
        <Fade key={block.id} bottom duration={1000}>
          <div className={`item ${block.type}`}>
            <div className="veil"></div>
            <div
              className="image"
              style={{
                background: `url(/images/blocks/${block.image}) no-repeat`,
              }}
                ></div>
                <div className="title">
                    <Link to={block.link}>{ block.title }</Link>
                </div>
          </div>
        </Fade>
      ))
    : null


const Blocks = (props) => {
    return (
        <div className="home_block">
            { generateBlocks(props.blocks) }
        </div>
    )
}

export default Blocks