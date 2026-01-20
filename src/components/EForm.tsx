import { useForm } from "react-hook-form"
export default function EForm() {
  const { register, handleSubmit } = useForm({
    shouldUseNativeValidation: true,
  })
  var count = 0;
  const onSubmit = async (data: any) => {
    localStorage.setItem('count','1')
       
    console.log(data.ProductName)
    localStorage.setItem('ProductName', data.ProductName);
    localStorage.setItem('ProductPrice', data.ProductPrice);
    localStorage.setItem('ProductCategory', data.ProductCategory);
    localStorage.setItem('StockQuantity', data.StockQuantity);
    console.log(localStorage.getItem('ProductName'));
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h4>Product Name: </h4>
      <input
        {...register("ProductName", {
          required: "Please enter Product name.",
        })}
      /><br></br>
      <h4>Product Price: </h4>
      <input
        {...register("ProductPrice", {
          required: "Please enter Price.",
        })}
      /><br></br>
      <h4>Product Category: </h4>
      <input
        {...register("ProductCategory", {
          required: "Please enter Product Category.",
        })}
      /><br></br>
      <h4>Stock Quantity: </h4>
      <input
        {...register("StockQuantity", {
          required: "Please enter Stock Quantity.",
        })}
      /><br></br>
      <input type="submit" />
    </form>
  )
}