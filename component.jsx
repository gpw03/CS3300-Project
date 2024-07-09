/**
 * v0 by Vercel.
 * @see https://v0.dev/t/1dNDDClGaWb
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-muted/40 px-4 md:px-6 lg:px-8">
      <div className="max-w-5xl w-full">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-background rounded-lg overflow-hidden">
            <img
              src="/placeholder.svg"
              width={800}
              height={600}
              alt="Auction Item"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">Vintage Leather Armchair</h1>
              <p className="text-muted-foreground mt-2">
                Beautifully crafted vintage leather armchair from the 1950s. Expertly restored and in excellent
                condition.
              </p>
            </div>
            <div className="bg-background rounded-lg p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Time left:</span>
                <div className="text-2xl font-bold">
                  <div />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Current Bid:</span>
                <div className="text-2xl font-bold">$750</div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Bids:</span>
                <div className="text-2xl font-bold">27</div>
              </div>
              <form className="grid gap-4">
                <div>
                  <Label htmlFor="bid-amount" className="text-muted-foreground">
                    Your Bid
                  </Label>
                  <div className="flex items-center gap-2">
                    <Input
                      id="bid-amount"
                      type="number"
                      min="750"
                      step="50"
                      placeholder="Enter your bid"
                      className="flex-1"
                    />
                    <Button type="submit">Place Bid</Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
