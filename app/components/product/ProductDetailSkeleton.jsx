import { Skeleton } from "@/components/ui/skeleton"
import { Button } from "@/components/ui/button"

export function ProductSkeleton() {
  return (
    <div className="w-full px-[5%] grid gap-20 min-h-[500px] py-10 font-inter">
      <Skeleton className="h-6 w-3/4 max-w-md" />
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-4 md:flex lg:flex-col md:space-y-0 xl:space-y-0 xl:flex xl:flex-row-reverse flex-row-reverse gap-4">
          <Skeleton className="aspect-square md:w-[85%] lg:w-full rounded-lg" />
          <div className="grid md:grid-cols-1 lg:grid-cols-4 grid-cols-4 xl:grid-cols-1 gap-4">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="aspect-square rounded-lg" />
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <Skeleton className="h-9 w-3/4" />
          <div className="flex items-center space-x-2">
            <Skeleton className="h-5 w-32" />
            <Skeleton className="h-5 w-24" />
          </div>
          <Skeleton className="h-8 w-24" />
          <Skeleton className="h-20 w-full" />
          <div className="space-y-4">
            <div className='flex items-center gap-2'>
              <Skeleton className="h-6 w-20" />
              <div className="flex space-x-2">
                {[...Array(3)].map((_, i) => (
                  <Skeleton key={i} className="w-5 h-5 rounded-full" />
                ))}
              </div>
            </div>
            <div className='flex items-center gap-2'>
              <Skeleton className="h-6 w-12" />
              <div className="flex space-x-2">
                {[...Array(5)].map((_, i) => (
                  <Skeleton key={i} className="h-8 w-8 rounded-md" />
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Skeleton className="h-10 w-32" />
            <Skeleton className="h-10 flex-1" />
            <Skeleton className="h-10 w-10" />
          </div>
          <div className="mt-4 space-y-4">
            <Skeleton className="h-20 w-full" />
            <Skeleton className="h-20 w-full" />
          </div>
        </div>
      </div>
      <div>
        <Skeleton className="h-8 w-48 mb-4" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <Skeleton key={i} className="aspect-square rounded-lg" />
          ))}
        </div>
      </div>
      <div>
        <Skeleton className="h-8 w-48 mb-4" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <Skeleton key={i} className="aspect-square rounded-lg" />
          ))}
        </div>
      </div>
    </div>
  )
}