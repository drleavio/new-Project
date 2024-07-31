import React from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Modal = ({ show, setShow, data, setData, todo, setTodo }) => {
  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
  };
  const handlesubmit = () => {
    setTodo([...todo, data]);
  };
  console.log(data);
  return (
    <Dialog
      open={show}
      onOpenChange={(val) => {
        setShow(val);
      }}
      className="dialog"
      style={{ height: "100vh", width: "100vw" }}
    >
      <DialogTrigger asChild>
        <Button
          className="btn"
          variant="outline"
          style={{
            backgroundColor: "black",
            width: "100%",
            paddingInline: "10px",
            color: "white",
            border: "0",
            display: "flex",
            alignItems: "centre",
            justifyContent: "flext-start",
          }}
        >
          Add new
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            <div>
              <div>
                <div>close</div>
                <div>zoom</div>
              </div>
              <div>
                <div>share</div>
                <div>favourite</div>
              </div>
            </div>
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Title
            </Label>
            <Input
              id="title"
              name="title"
              defaultValue="Pedro Duarte"
              className="col-span-3"
              value={data.title}
              onChange={handlechange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              status
            </Label>
            <Input
              id="status"
              name="status"
              defaultValue="@peduarte"
              className="col-span-3"
              value={data.status}
              onChange={handlechange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              priority
            </Label>
            <Input
              id="priority"
              name="priority"
              defaultValue="@peduarte"
              className="col-span-3"
              value={data.priority}
              onChange={handlechange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              deadline
            </Label>
            <Input
              id="deadline"
              name="deadline"
              defaultValue="@peduarte"
              className="col-span-3"
              value={data.deadline}
              onChange={handlechange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              description
            </Label>
            <Input
              id="description"
              name="description"
              defaultValue="@peduarte"
              className="col-span-3"
              value={data.description}
              onChange={handlechange}
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handlesubmit}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
