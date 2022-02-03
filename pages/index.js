import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from "react"
import DatePicker from "react-datepicker";
import { CalendarIcon } from '@heroicons/react/solid'
import "react-datepicker/dist/react-datepicker.css";
export default function Home() {
  const [startdate, setStartDate] = useState(new Date());
  return (
    <div className=' flex justify-center h-screen items-center font-Lato italic'>
      <form class="w-full  bg-[#1779DB] p-6 text-white m-40">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3 ">
            <label class="block uppercase tracking-wide   mb-2" for="grid-password">
              Your full given name :
            </label>
            <input class="bg-[#1779DB] placeholder:text-white appearance-none block w-full  border  rounded py-3 px-4 mb-3 leading-tight " placeholder="John Doe" />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide mb-2" for="grid-first-name">
              Date of Birth
            </label>
            <div className=" relative rounded-md shadow-sm">
              <div className=" flex absolute z-40 text-gray-400 ">
                <CalendarIcon className="h-11 w-7 " aria-hidden="true" />
              </div>
              <div>
                <DatePicker selected={startdate} onChange={(date) => setStartDate(date)} className=' w-full text-gray-700 pl-10' />
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2 ">
            <label class="block uppercase tracking-wide   mb-2" for="grid-last-name">
              Country of residence or citizenship
            </label>
            <input class="bg-[#1779DB] placeholder:text-white appearance-none block w-full border  rounded py-3 px-4 leading-tight border-white " type="text" placeholder="Doe" />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide mb-2" >
              What school do you plan to attend?
            </label>
            <input class="bg-[#1779DB] placeholder:text-white appearance-none block w-full border  rounded py-3 px-4 mb-3 leading-tight border-white " type="text" placeholder="University of British Columbia" />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-2">
          <div class="w-full px-3">
            <label >Please take a moment to describe your intended area of study</label>
            <div class="mt-1">
              <textarea rows="4" placeholder='Enter deatil here' class="bg-[#1779DB] placeholder:text-white p-3   block w-full  rounded-md border-white " />
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
