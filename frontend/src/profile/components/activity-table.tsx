import { CustomEmpty } from "@/shared/components/ui/empty";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui/table";
import { truncateMiddle } from "@/shared/lib/utils";

const activities = [
  {
    id: 1,
    event: "Sale",
    item: "Cosmic Panther",
    price: 0.07393,
    qty: 1,
    from: "0x12a93fB9987C34A4dF1a4d98267Ab39f32B7E9dA",
    to: "0xAb47C15b29B58d3eD33250E7D988Bc4567fD123A",
    time: "31st Oct 2025",
    imgUrl: "https://api.dicebear.com/9.x/adventurer/svg?seed=CryptoKemi",
  },
  {
    id: 2,
    event: "Mint",
    item: "Dreamwalker",
    price: 0.9473684,
    qty: 1,
    from: "0x0000000000000000000000000000000000000000",
    to: "0xC91D37Fa88762A90B5aE3b4E451eF30B9E872DbC",
    time: "12th Sep,2025",
    imgUrl: "https://api.dicebear.com/9.x/adventurer/svg?seed=CryptoKemi",
  },
  {
    id: 3,
    event: "Transfer",
    item: "Neon Mirage",
    price: 49.274,
    qty: 1,
    from: "0xF2b45a7E87eA93fE54BCE8d2a7aC1E67B8998EaD",
    to: "0xD83EaC1D67bE92F2E543aB12e97A56aCd987A7b1",
    time: "27th Feb 2025",
    imgUrl: "https://api.dicebear.com/9.x/adventurer/svg?seed=CryptoKemi",
  },
];

export default function ActivityTable() {
  return (
    <>
      {activities.length > 0 ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Event</TableHead>
              <TableHead className="w-[200px]">Item</TableHead>
              <TableHead>Price</TableHead>
              <TableHead className="text-right">Qty</TableHead>
              <TableHead className="text-right">From</TableHead>
              <TableHead className="text-right">To</TableHead>
              <TableHead className="text-right">Time</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {activities.map((activity) => (
              <TableRow key={activity.id}>
                <TableCell>{activity.event}</TableCell>
                <TableCell>
                  <div className="flex gap-2 items-center">
                    <div className="h-12 w-12 rounded-md overflow-hidden border border-border bg-muted">
                      <img
                        src={activity.imgUrl}
                        alt={activity.item}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-between">
                      <span className="font-medium">{activity.item}</span>
                      <span className="text-text-secondary text-xs">
                        {activity.item}
                      </span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{activity.price}</TableCell>
                <TableCell className="text-right">{activity.qty}</TableCell>
                <TableCell className="text-right">
                  {truncateMiddle(activity.from)}
                </TableCell>
                <TableCell className="text-right">
                  {truncateMiddle(activity.to)}
                </TableCell>
                <TableCell className="text-right">{activity.time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <div className="flex justify-center py-10">
          <CustomEmpty
            title="You have no activity available"
            description="Start now to create or buy your NFT"
            buttonText="Buy now"
            variant="default"
          />
        </div>
      )}
    </>
  );
}
