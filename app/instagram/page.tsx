"use client"
import Arrow from "@/app/components/svg/Arrow"
// import { toCanvas } from "html-to-image"
import Radio from "@/app/components/common/Radio"
import { useState } from "react"
interface FormData {
  type: string;
  name?: string;
  value?: number; // 确保 value 是 number
  placeholder?: string;
  isActive: boolean;
}
export default function Page(){
  
  const [postStatus, setPostStatus] = useState({
    postedNum: 0,
    contentCreatedNum: 4,
    contentWaitingNum: 5
  })

  
  const [formData, setFormData] = useState<FormData[]>([
      {
        type: "text",
        name: "全部處理",
        isActive: true
      },
      {
        type: "input",
        value: 5,
        placeholder: "欲處理數量",
        isActive: false
      },
    ]
  )
  const [postList, setPostList] = useState([
    {
      id: 1,
      english: "Wrap Sb head around",
      chinese: "理解～",
      // status: 1(已處理), status: 2(處理中), status: 3(待處理)
      status: 1,
    },
    {
      id: 2,
      english: "Fall out",
      chinese: "爭吵",
      status: 2,
    },
    {
      id: 3,
      english: "Fall out",
      chinese: "爭吵",
      status: 3,
    },
    {
      id: 4,
      english: "Fall out",
      chinese: "爭吵",
      status: 3,
    },
    {
      id: 5,
      english: "Fall out",
      chinese: "爭吵",
      status: 3,
    },
  ])

  const handleUpdateInputValue = (value: string) => {
    setFormData(formData.map(radio => radio.type === "input" ? {...radio, value: value ? parseInt(value): 0} : radio))
    console.log("eee", value, typeof(value))
  }

  const handleChangeRadio = (e: any) => {
    console.log("xxx", e.target.id)
    setFormData(formData.map(radio => radio.type === e.target.id ? {...radio, isActive: true} : {...radio, isActive: false}))
  }

  const getProcessNum = () => {
    const processNum = formData.find(i => i.type === "input" && i.isActive)?.value
    return processNum ? processNum : "all"
            
  }
  
  return (
    <section className="flex">
      <div>
        <div className="relative w-[300px] h-[300px]">
          <div>
            <img src="/background.png" alt="background image" />
          </div>
          <div className="flex flex-col absolute-center w-[200px] h-[200px] border rounded-[15px] bg-white/20 backdrop-blur-sm">
            <div className="flex-grow flex-center flex-col border-b border-white">
              <h3>Wrap Sb head around</h3>
              <h4 className="mt-[30px] text-[20px]">理解～</h4>
            </div>
            <div className="flex-none flex-center h-[60px]">
              <div className="flex-center w-[40px] h-[40px] border border-white/40 rounded-full">
                <Arrow />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <span>已發佈： {postStatus.postedNum}</span>
          <span>已產生圖文： {postStatus.contentCreatedNum}</span>
          <span>待產生圖文： {postStatus.contentWaitingNum}</span>
          <form className="flex flex-col">
            {
              formData.map((i, key) => (
                <Radio key={key} label={i} updateFunc={handleUpdateInputValue} updateRadio={handleChangeRadio} />
              ))
            }
            <button className="flex-none mt-[10px] w-[200px] h-[40px] text-white border border-white rounded-[5px]">圖片及內容生成({getProcessNum()})</button>
          </form>
          
        </div>
      </div>
      <ul>
        {
          postList.map(i => (
            <li key={i.id} className="flex justify-between w-[400px] px-[20px] py-[16px] border border-white">
              <span>{i.english}</span>
              <span>{i.status === 1 ? "已處理" : i.status === 2 ? "處理中" : "待處理"}</span>
            </li>
          ))
        }
        
        
      </ul>
      
    </section>
  )
}