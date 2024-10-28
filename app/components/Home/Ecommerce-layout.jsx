import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const categories = [
  "Woman's Fashion",
  "Men's Fashion",
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby's & Toys",
  "Groceries & Pets",
  "Health & Beauty",
]

export default function HomeComponent() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 bg-white p-4 border-r">
        <ul className="space-y-2">
          {categories.map((category, index) => (
            <li key={index} className="flex items-center justify-between py-2 px-3 hover:bg-gray-100 rounded cursor-pointer">
              <span>{category}</span>
              {(index === 0 || index === 1) && <ChevronRight className="h-4 w-4" />}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4">
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {/* iPhone Slide */}
            <CarouselItem>
              <Card className="bg-black text-white">
                <CardContent className="flex items-center justify-between p-6">
                  <div className="space-y-4">
                    <img src="/placeholder.svg?height=40&width=40" alt="Apple logo" className="w-10 h-10" />
                    <h2 className="text-2xl font-bold">iPhone 14 Series</h2>
                    <p className="text-4xl font-bold">Up to 10% off Voucher</p>
                    <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                      Shop Now
                    </Button>
                  </div>
                  <img
                    src="/placeholder.svg?height=300&width=300"
                    alt="iPhone 14 Pro"
                    className="w-64 h-64 object-contain"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
            {/* Additional slides can be added here */}
            <CarouselItem>
              <Card className="bg-primary">
                <CardContent className="flex items-center justify-center h-[400px]">
                  <h2 className="text-3xl font-bold text-white">Slide 2</h2>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className="bg-secondary">
                <CardContent className="flex items-center justify-center h-[400px]">
                  <h2 className="text-3xl font-bold text-white">Slide 3</h2>
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  )
}