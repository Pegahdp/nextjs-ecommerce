import Image from "next/image";

export default function CartModal() {
  const cartItems = true;
  return (
    <div className="w-max absolute top-8 right-0 p-4 rounded-md shadow-md bg-white flex flex-col gap-6">
      {!cartItems ? (
        <div className="">Cart is empty</div>
      ) : (
        <>
          <h2 className="text-lg">Shopping Cart</h2>
          <div className="flex flex-col gap-8">
            <div className="flex gap-4">
              <Image
                src="https://dummyimage.com/400x600/00ff00/000"
                alt=""
                width={72}
                height={86}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col w-full gap-8 justify-between">
                <div>
                  <div className="flex items-center justify-center gap-8">
                    <h3 className="font-semibold">Product Name</h3>
                    <div className="p-1 bg-slate-50 rounded-sm">49$</div>
                  </div>
                  <div className="text-sm text-gray-500">available</div>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Qty. 2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Image
                src="https://dummyimage.com/400x600/00ff00/000"
                alt=""
                width={72}
                height={86}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col w-full gap-8 justify-between">
                <div>
                  <div className="flex items-center justify-center gap-8">
                    <h3 className="font-semibold">Product Name</h3>
                    <div className="p-1 bg-slate-50 rounded-sm">49$</div>
                  </div>
                  <div className="text-sm text-gray-500">available</div>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Qty. 2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center font-semibold">
              <span className="">Subtotal</span>
              <span className="">$49</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4">
              Shipping and texes calculated at checkout
            </p>
            <div className="flex justify-between text-sm">
              <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">
                View Cart
              </button>
              <button className="rounded-md py-3 px-4 bg-black text-white">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
