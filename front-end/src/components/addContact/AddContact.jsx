import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addContact } from "../../future/contacts/contactsSlice";
import { nanoid } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

function AddContact() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    dispatch(addContact({ id: nanoid(), ...data }));
    navigate("/");
  };

  return (
    <div className="w-full h-full text-whit flex flex-col gap-5 pb-5">
      <div className="text-center font-semibold text-lg text-white">
        <p>اضافه کردن مخاطب</p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        <div className="flex flex-col gap-5">
          <input
            {...register("name", {
              required: {
                value: true,
                message: "نام مخاطب اجباری میباشد",
              },
              minLength: {
                value: 3,
                message: "اسم حداقل باید 3 کاراکتر داشته باشد !",
              },
              maxLength: {
                value: 12,
                message: "اسم بیشتر از 12 کاراکتر مجاز نمیباشد",
              },
            })}
            placeholder="نام مخاطب را وارد کنید ..."
            className="rounded bg-transparent border border-gray-600 p-2 text-white"
          />
          {errors.name && (
            <p className="text-center text-white text-sm">
              - {errors.name.message} -
            </p>
          )}
        </div>
        <div className="flex flex-col gap-5">
          <input
            {...register("last", {
              required: {
                value: true,
                message: "نام خانوادگی مخاطب اجباری میباشد",
              },
              minLength: {
                value: 3,
                message: "فامیلی حداقل باید 3 کاراکتر داشته باشد !",
              },
              maxLength: {
                value: 12,
                message: "فامیلی بیشتر از 12 کاراکتر مجاز نمیباشد",
              },
            })}
            placeholder="نام خانوادگی مخاطب را وارد کنید ..."
            className="rounded bg-transparent border border-gray-600 p-2 text-white"
          />
          {errors.last && (
            <p className="text-center text-white text-sm">
              - {errors.last.message} -
            </p>
          )}
        </div>
        <div className="flex flex-col gap-5">
          <input
            {...register("phone", {
              required: {
                value: true,
                message: "تلفن مخاطب اجباری میباشد",
              },
              minLength: {
                value: 9,
                message: "تلفن حداقل باید 9 کاراکتر داشته باشد !",
              },
              maxLength: {
                value: 13,
                message: "تلفن بیشتر از 12 کاراکتر مجاز نمیباشد",
              },
            })}
            placeholder="شماره تلفن مخاطب را وارد کنید ..."
            className="rounded bg-transparent border border-gray-600 p-2 text-white"
          />
          {errors.phone && (
            <p className="text-center text-white text-sm">
              - {errors.phone.message} -
            </p>
          )}
        </div>
        <div className="flex flex-col gap-5">
          <input
            {...register("email", {
              required: {
                value: true,
                message: "ایمیل مخاطب اجباری میباشد",
              },
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message: "ایمیل معتبر نمیباشد",
              },
            })}
            placeholder="آدرس ایمیل مخاطب را وارد کنید ..."
            className="rounded bg-transparent border border-gray-600 p-2 text-white"
          />
          {errors.email && (
            <p className="text-center text-white text-sm">
              - {errors.email.message} -
            </p>
          )}
        </div>
        <div className="flex flex-col gap-5">
          <input
            {...register("company", {
              required: {
                value: true,
                message: "نام شرکت مخاطب اجباری میباشد",
              },
              minLength: {
                value: 5,
                message: "شرکت حداقل باید 5 کاراکتر داشته باشد !",
              },
              maxLength: {
                value: 16,
                message: "شرکت بیشتر از 16 کاراکتر مجاز نمیباشد",
              },
            })}
            placeholder="نام محل فعالیت مخاطب را وارد کنید ..."
            className="rounded bg-transparent border border-gray-600 p-2 text-white"
          />
          {errors.company && (
            <p className="text-center text-white text-sm">
              - {errors.company.message} -
            </p>
          )}
        </div>
        <div className="flex flex-col gap-5">
          <input
            {...register("job", {
              required: {
                value: true,
                message: "شغل مخاطب اجباری میباشد",
              },
              minLength: {
                value: 5,
                message: "شغل حداقل باید 5 کاراکتر داشته باشد !",
              },
              maxLength: {
                value: 16,
                message: "شغل بیشتر از 16 کاراکتر مجاز نمیباشد",
              },
            })}
            placeholder="شغل مخاطب را وارد کنید ..."
            className="rounded bg-transparent border border-gray-600 p-2 text-white"
          />
          {errors.job && (
            <p className="text-center text-white text-sm">
              - {errors.job.message} -
            </p>
          )}
        </div>
        <div className="flex flex-col gap-5">
          <input
            {...register("address", {
              required: {
                value: true,
                message: "آدرس شهر مخاطب اجباری میباشد",
              },
              minLength: {
                value: 8,
                message: "آدرس شهر حداقل باید 8 کاراکتر داشته باشد !",
              },
              maxLength: {
                value: 20,
                message: "آدرس شهر بیشتر از 20 کاراکتر مجاز نمیباشد",
              },
            })}
            placeholder="آدرس شهر مخاطب را وارد کنید ..."
            className="rounded bg-transparent border border-gray-600 p-2 text-white"
          />
          {errors.address && (
            <p className="text-center text-white text-sm">
              - {errors.address.message} -
            </p>
          )}
        </div>
        <div className="flex flex-col gap-5">
          <input
            {...register("home", {
              required: {
                value: true,
                message: "آدرس منزل مخاطب اجباری میباشد",
              },
              minLength: {
                value: 8,
                message: "آدرس منزل حداقل باید 8 کاراکتر داشته باشد !",
              },
              maxLength: {
                value: 20,
                message: "آدرس منزل بیشتر از 20 کاراکتر مجاز نمیباشد",
              },
            })}
            placeholder="آدرس منزل مخاطب را وارد کنید ..."
            className="rounded bg-transparent border border-gray-600 p-2 text-white"
          />
          {errors.home && (
            <p className="text-center text-white text-sm">
              - {errors.home.message} -
            </p>
          )}
        </div>
        <div className="flex flex-col gap-5 sm:col-span-2 lg:col-span-1">
          <input
            {...register("image", {
              required: { value: true, message: "عکس مخاطب اجباری میباشد" },
            })}
            placeholder="آدرس عکس مخاطب را وارد کنید ..."
            className="rounded bg-transparent border border-gray-600 p-2 text-white "
          />
          {errors.image && (
            <p className="text-center text-white text-sm">
              - {errors.image.message} -
            </p>
          )}
        </div>
        <select
          {...register("single")}
          className="rounded bg-transparent border border-gray-600 p-2 text-white"
        >
          <option
            value="مجرد"
            className="text-black rounded-none font-semibold"
          >
            مجرد
          </option>
          <option
            value="متاهل"
            className="text-black rounded-none font-semibold"
          >
            متاهل
          </option>
        </select>
        <select
          {...register("relation")}
          className="rounded bg-transparent border border-gray-600 p-2 text-white"
        >
          <option
            value="خانواده"
            className="text-black rounded-none font-semibold"
          >
            خانواده
          </option>
          <option
            value="دوست"
            className="text-black rounded-none font-semibold"
          >
            دوست
          </option>
          <option
            value="همکار"
            className="text-black rounded-none font-semibold"
          >
            همکار
          </option>
          <option
            value="آشنا"
            className="text-black rounded-none font-semibold"
          >
            آشنا
          </option>
        </select>
        <button
          type={"submit"}
          className="border sm:col-span-2 lg:col-span-3 bg-white rounded py-2 font-semibold"
        >
          ایجاد مخاطب
        </button>
      </form>
    </div>
  );
}

export default AddContact;
