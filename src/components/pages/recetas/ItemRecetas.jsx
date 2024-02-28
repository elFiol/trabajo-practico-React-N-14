const ItemRecetas = ({receta}) => {
  return (
    <tr>
      <td>{receta.id}</td>
      <td>{receta.titulo}</td>
      <td>{receta.categoria}</td>
      <td>
        <img src={receta.imagen} alt={receta.titulo} className="img-fluid w-100"/>
      </td>
      <td>
        <a className="btn btn-danger mx-2">
          <i className="bi bi-trash"></i>
        </a>
        <a className="btn btn-warning">
          <i className="bi bi-pencil-square"></i>
        </a>
      </td>
    </tr>
  );
};

export default ItemRecetas;
