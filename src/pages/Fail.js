import React, { Component } from 'react';
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";



export default class Fail extends Component {
  render() {
    return (
        <div className="mt-4 text-center">
        <Image src="assets/images/sukses.png" width="500" />
        <h2>Harap Masukan Pesanan</h2>
        <Button variant="primary" as={Link} to="/">
          Kembali
        </Button>
      </div>
    )
  }
}
