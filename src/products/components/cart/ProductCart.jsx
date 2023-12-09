import styles from "./style/cart.module.css";
import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { CiTrash } from "react-icons/ci";

import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  decreaseProduct,
  increaseProduct,
  removeItem,
} from "../../../store/Cart/cartSlice";
import { Button } from "@mui/material";
import { ModalDelete } from "../modals/ModalDelete";
import { EmptyCart } from "./components";

export const ProductCart = ({ open, setOpen }) => {
  const dispacth = useDispatch();
  const { products, total } = useSelector((state) => state.Cart);
  const [clearOPM, setClearOPM] = useState(false);

  if (!open) {
    return null;
  }

  const closeCart = () => {
    setOpen(false);
  };

  const handlerRemove = (id) => {
    dispacth(removeItem(id));
  };

  const handlerIncrease = (id) => {
    dispacth(increaseProduct(id));
  };

  const handlerDecrease = (id) => {
    dispacth(decreaseProduct(id));
  };

  const handlearClear = () => {
    setClearOPM(true);
  };

  const handlerModalClose = () => {
    setClearOPM(false);
  };

  useEffect(() => {
    console.log(clearOPM);
  }, [clearOPM]);

  const hanlderBUY = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },

      willClose: () => {
        dispacth(clearCart());
      },
    });
    Toast.fire({
      icon: "success",
      title: "Purchase successfully",
    });
  };

  const shouldRenderOverlay = !clearOPM; // Variable que controla el renderizado del overlay del carrito
  return (
    <>
      {clearOPM && (
        <div>
          <ModalDelete open={clearOPM} closeModal={handlerModalClose} />
        </div>
      )}

      {shouldRenderOverlay && (
        <Transition.Root show={open} as={Fragment}>
          <Dialog as="div" className="relative" onClose={setOpen}>
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              style={{ zIndex: 5 }} // Añadir zIndex aquí
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity bg-modal bg-black" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-hidden text-textModal animate__animated animate__fadeIn z-10 ">
              <div className="absolute inset-0 overflow-hidden ">
                <div
                  className={`${styles.cart__modal}pointer-events-none fixed inset-y-0 right-0 flex bg-withe max-w-full t w-auto"`}
                >
                  <Transition.Child
                    as={Fragment}
                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                    enterFrom="translate-x-full"
                    enterTo="translate-x-0"
                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-full"
                  >
                    <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                      <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                          <div className="flex items-start justify-between">
                            <Dialog.Title className="text-lg font-medium text-gray-900">
                              Shopping cart
                            </Dialog.Title>
                            <div className="ml-3 flex h-7 items-center">
                              <button
                                type="button"
                                className="relative -m-2 p-2 text-gray-400 hover:text-gray-500 border-none"
                                onClick={() => setOpen(false)}
                              >
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Close panel</span>
                                <XMarkIcon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              </button>
                            </div>
                          </div>

                          <div className="mt-8">
                            <div className="flow-root">
                              <>{products.length === 0 ? <EmptyCart /> : ""}</>
                              <ul
                                role="list"
                                className="-my-6 divide-y divide-gray-200"
                              >
                                {products.map((product) => (
                                  <li key={product.id} className="flex py-6">
                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md  border-gray-200 ">
                                      <img
                                        src={`assets/imagesCourse/${product.tecnologia}.svg`}
                                        alt={product.imageAlt}
                                        className="h-full w-full object-cover object-center"
                                      />
                                    </div>

                                    <div className="ml-1 flex flex-1 flex-col">
                                      <div>
                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                          <h3>
                                            <a href={product.href}>
                                              {product.nombre}
                                            </a>
                                          </h3>
                                          <p>{product.precio}$</p>
                                        </div>
                                        <p className="mt-1 text-sm text-gray-500">
                                          {product.color}
                                        </p>
                                      </div>
                                      <div className="flex flex-1 items-end justify-between text-sm">
                                        <p className="text-gray-500">
                                          Quantity {product.cantidad}
                                        </p>

                                        <div className="flex gap-3">
                                          <button
                                            onClick={() =>
                                              handlerIncrease(product.id)
                                            }
                                            type="button"
                                            className="font-bold text-indigo-600 hover:text-indigo-500 border-none"
                                          >
                                            +
                                          </button>
                                          <button
                                            onClick={() =>
                                              handlerDecrease(product.id)
                                            }
                                            type="button"
                                            className="font-bold text-indigo-600 hover:text-indigo-500 border-none"
                                          >
                                            -
                                          </button>
                                        </div>

                                        <div className="flex">
                                          <button
                                            onClick={() =>
                                              handlerRemove(product.id)
                                            }
                                            type="button"
                                            className="font-medium text-indigo-600 hover:text-indigo-500 border-none"
                                          >
                                            Remove
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <p>Subtotal</p>
                            <p> {total} $</p>
                          </div>
                          <p className="mt-0.5 text-sm text-gray-500">
                            Shipping and taxes calculated at checkout.
                          </p>
                          <div className="mt-6">
                            <button
                              onClick={hanlderBUY}
                              className={`${styles.btnBuy}`}
                            >
                              buy now
                            </button>
                            {/*  <a
                          href="products/cart"
                          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          Checkout
                        </a>*/}
                          </div>
                          <button
                            onClick={handlearClear}
                            className="border-none text w-auto flex items-center gap-1"
                          >
                            Clear Cart
                            <CiTrash size={24} />
                          </button>
                          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                            <p>
                              or
                              <button
                                type="button"
                                className="font-medium text-indigo-600 hover:text-indigo-500 w-auto"
                                onClick={() => setOpen(false)}
                              >
                                Continue Shopping
                                <span aria-hidden="true"> &rarr;</span>
                              </button>
                            </p>
                          </div>
                        </div>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      )}
    </>
  );
};
