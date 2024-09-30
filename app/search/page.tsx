"use client"

import SearchCondition from "@/components/secondary/SearchCondition"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from "next/image"

export default function SearchPage() {
    return (
        <main>
            <div className="mt-14 flex max-w-7xl m-auto">
                <div className="">
                    <SearchCondition/>
                </div>
                <div className=" grid grid-cols-2 gap-4 m-auto">
                    {
                        [...Array(10)].map((_, i) => (
                            <Card key={i} className="w-96">
                                <CardContent>
                                    <Image src="/images/prob.jpg" alt="property" width={384} height={288}/>
                                    <h1 className=" text-2xl font-bold">
                                        บ้านพร้อมที่ดิน
                                    </h1>
                                    <p>400,000 บาท</p>
                                    <p>เชียงใหม่</p>
                                    <p>4 ห้องนอน 3 ห้องน้ำ</p>
                                </CardContent>
                            </Card>
                        ))
                    }
                </div>
            </div>
        </main>
    )
}