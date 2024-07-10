import { Table } from "react-bootstrap";
import React from 'react'
import RecipeListing from "./recipeListing";


export default function RecipesTable() {
  return (
    <div>
      <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">NO</th>
      <th scope="col">Recipes Names</th>
      <th scope="col">Image</th>
      <th scope="col">Ingredients</th>
      <th scope="col">Instuctions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td>@mdo</td>
    </tr>
  </tbody>
</table>
    </div>
  )
}
