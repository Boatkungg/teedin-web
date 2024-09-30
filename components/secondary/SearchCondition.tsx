"use client"

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import ComboBox from "@/components/ui/combobox";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Label } from "@/components/ui/label";

const options = [
    {value: "Chiang_Mai", label: "Chiang Mai"},
    {value: "Chiang_Rai", label: "Chiang Rai"},
    {value: "Bangkok", label: "Bangkok"},
    {value: "Phuket", label: "Phuket"},
];

export default function SearchCondition() {
    const searchParams = useSearchParams();
    const pathName = usePathname();
    const router = useRouter();

    const [province, setProvince] = useState<string>(searchParams.get("province") || "");
    const [minPrice, setMinPrice] = useState<string>(searchParams.get("minPrice") || "");
    const [maxPrice, setMaxPrice] = useState<string>(searchParams.get("maxPrice") || "");

    return (
        <Card className="w-80 sticky top-20">
            <CardHeader>
                <CardTitle>Search Conditions</CardTitle>
            </CardHeader>
            <CardContent className=" space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="province">Province</Label>
                    <ComboBox
                        options={options}
                        value={province}
                        setValue={setProvince}
                        placeholder="Province"
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="price">Price</Label>
                    <div className="flex justify-between space-x-3">
                        <Input type="number" placeholder="Min" value={minPrice} onChange={(e) => setMinPrice(e.target.value)}/>
                        <Input type="number" placeholder="Max" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)}/>
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full" onClick={() => {
                    const params = new URLSearchParams(searchParams.toString());
                    params.set("province", province);
                    params.set("minPrice", minPrice);
                    params.set("maxPrice", maxPrice);

                    router.push(`${pathName}?${params.toString()}`);
                }}>
                    Search
                </Button>
            </CardFooter>
        </Card>
    )
}