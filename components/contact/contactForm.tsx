import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "../ui/textarea";

function ContactForm() {
  return (
    <Card className="w-full bg-stone-100">
      <CardHeader></CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <Label htmlFor="first-name">
              Name <span className="text-muted-foreground">(required)</span>{" "}
            </Label>
            <div className="md:flex gap-5">
              <div className="flex flex-col space-y-1.5 w-full lg:mb-0 mb-4">
                <Label htmlFor="first-name">First Name</Label>
                <Input id="first-name" />
              </div>
              <div className="flex flex-col space-y-1.5 w-full">
                <Label htmlFor="last-name">Last Name</Label>
                <Input id="last-name" />
              </div>
            </div>
            <div className="flex flex-col space-y-1.5 w-full">
              <Label htmlFor="phone">
                Phone <span className="text-muted-foreground">(required)</span>{" "}
              </Label>
              <Input id="phone" />
            </div>
            <div className="flex flex-col space-y-1.5 w-full">
              <Label htmlFor="email">
                Email <span className="text-muted-foreground">(required)</span>{" "}
              </Label>
              <Input id="email" type="email" />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" className="rounded-full h-6 w-6"/>
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Sign Up for News and Updates
              </label>
            </div>
            <div className="flex flex-col space-y-1.5">
						<Label htmlFor="interestedIn">
                I am interested in: <span className="text-muted-foreground">(required)</span>{" "}
              </Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="organization">Organization</SelectItem>
                  <SelectItem value="personal">Personal Assistance</SelectItem>
                  <SelectItem value="both">Both</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
						<div className="flex flex-col space-y-1.5 w-full">
              <Label htmlFor="message">
                Message {" "}
              </Label>
              <Textarea id="message" placeholder="Share your goals here. Your can also per-complete the questionnare from to prepare for your consult. We will request it when we reach out!" />
            </div>
						<div className="flex flex-col space-y-1.5 ">
              <Label htmlFor="time">
                {"I'm"} usually available at:
              </Label>
              <Input id="time" type="time" className="w-fit"  />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button>Submit</Button>
      </CardFooter>
    </Card>
  );
}

export default ContactForm;
