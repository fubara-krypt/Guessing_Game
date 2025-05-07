import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

const files = [
  {
    name: "Tech requirements.pdf",
    size: "200 KB",
    uploaded: "Jan 4, 2022",
    updated: "Jan 4, 2022",
    user: "Olivia Rhye",
  },

  {
    name: "Dashboard screenshot.jpg",
    size: "720 KB",
    uploaded: "Jan 4, 2022",
    updated: "Jan 4, 2022",
    user: "Phoenix Baker",
  },

  {
    name: "Dashboard prototype FINAL.fig",
    size: "4.2 MB",
    uploaded: "Jan 6, 2022",
    updated: "Jan 6, 2022",
    user: "Demi Wilkinson",
  },
];

export default function ProcurementDashboard() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r p-4 flex flex-col justify-between">
        <div>
          <div className="text-xl font-bold text-indigo-700 mb-8">
            Ejovi Offshore
          </div>
          <div className="space-y-4">
            <div className="text-gray-700 font-medium">🏠 Home</div>
            <div className="text-indigo-700 font-medium">📁 Requests</div>
            <div className="text-gray-700 font-medium">✅ Approve</div>
            <div className="text-gray-700 font-medium">🛒 Procure</div>
            <div className="text-gray-700 font-medium">📦 Receive</div>
            <div className="text-gray-700 font-medium">⚙️ Settings</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="/avatar.jpg" />
            <AvatarFallback>DR</AvatarFallback>
          </Avatar>
          <div className="text-sm">
            Diki Roberts <br />{" "}
            <span className="text-gray-400 text-xs">droberts@ejovi.com</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 space-y-6 bg-gray-50">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Requests</h2>
          <Button className="bg-purple-600 text-white hover:bg-purple-700">
            Create Request
          </Button>
        </div>

        <div className="flex items-center justify-between">
          <Input placeholder="Search requests..." className="w-1/3" />
          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger value="all">View All</TabsTrigger>
              <TabsTrigger value="monitored">Monitored</TabsTrigger>
              <TabsTrigger value="unmonitored">Unmonitored</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <Card>
          <CardContent>
            <ScrollArea className="h-[400px]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left border-b">
                    <th className="p-2">File name</th>
                    <th className="p-2">File size</th>
                    <th className="p-2">Date uploaded</th>
                    <th className="p-2">Last updated</th>
                    <th className="p-2">Uploaded by</th>
                    <th className="p-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {files.map((file, idx) => (
                    <tr key={idx} className="border-b hover:bg-gray-100">
                      <td className="p-2">{file.name}</td>
                      <td className="p-2">{file.size}</td>
                      <td className="p-2">{file.uploaded}</td>
                      <td className="p-2">{file.updated}</td>
                      <td className="p-2">{file.user}</td>
                      <td className="p-2">
                        <Badge
                          variant="outline"
                          className="text-green-600 border-green-300"
                        >
                          Approved
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
                r
              </table>
            </ScrollArea>h
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

var number = 8;
// This is not the best way to write Java Script because var is no longer used anymore

let number = 23;

const Favour = "Fubara's Wife";
const dateOfBirth = "5th of May";
const christmasDay = "25 December";

/* This is the best way to write Java Script with Let and Const but this is actually a string right now */
