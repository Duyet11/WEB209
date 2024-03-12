import React from 'react'

type Props = {}

const Slider = (props: Props) => {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="https://demoda.vn/wp-content/uploads/2022/01/hinh-nen-mau-vang-dep-dang-yeu.jpg" className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="https://scr.vn/wp-content/uploads/2020/07/%E1%BA%A3nh-n%E1%BB%81n-c%E1%BB%B1c-%C4%91%E1%BB%99c-d%C3%A1o.jpg" className="d-block w-100" alt="..."/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )
}
export default Slider;