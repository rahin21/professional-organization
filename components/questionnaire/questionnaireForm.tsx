import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "../ui/textarea";

function QuestionnaireForm() {
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

            <div className="flex flex-col space-y-1.5 w-full mb-5">
              <Label htmlFor="q1">
                What are YOUR goals for this project? How many hours do you
                anticipate this project taking?{" "}
                <span className="text-muted-foreground">(required)</span>{" "}
              </Label>
              <Textarea
                id="q1"
                placeholder="Share your goals here. Your can also per-complete the questionnare from to prepare for your consult. We will request it when we reach out!"
              />
            </div>

            <div className="flex flex-col space-y-1.5 w-full mb-5">
              <Label htmlFor="q1">
                What type of storage containers do you prefer? (clear bins,
                neutral bins/baskets; colored bins/baskets; fabric bins;
                baskets; or does it vary by room?) (please specify){" "}
                <span className="text-muted-foreground">(required)</span>{" "}
              </Label>
              <Textarea
                id="q1"
                placeholder="Share your goals here. Your can also per-complete the questionnare from to prepare for your consult. We will request it when we reach out!"
              />
            </div>

            <div className="flex flex-col space-y-1.5 w-full mb-5">
              <Label htmlFor="q1">
                Are you willing to be ACTIVE in the declutter process before we
                begin organizing? After the decluttering, do you or your partner
                prefer/require high involvement or minimal involvement in
                decision-making?{" "}
                <span className="text-muted-foreground">(required)</span>{" "}
              </Label>
              <Textarea
                id="q1"
                placeholder="Share your goals here. Your can also per-complete the questionnare from to prepare for your consult. We will request it when we reach out!"
              />
            </div>

            <div className="flex flex-col space-y-1.5 w-full mb-5">
              <Label htmlFor="q1">
                What is/are your home {"style"} preference(s)? i.e.
                Minimalistic, Neat & Tidy, Easy Accessibility, Modernized,
                Farmhouse{" "}
                <span className="text-muted-foreground">(required)</span>{" "}
              </Label>
              <Textarea
                id="q1"
                placeholder="Share your goals here. Your can also per-complete the questionnare from to prepare for your consult. We will request it when we reach out!"
              />
            </div>

            <div className="flex flex-col space-y-1.5 w-full mb-5">
              <Label htmlFor="q1">
                Once we decide on a budget, do you prefer that I shop for you or
                do you prefer we decide together what is needed and you shop for
                items yourself?{" "}
                <span className="text-muted-foreground">(required)</span>{" "}
              </Label>
              <Textarea
                id="q1"
                placeholder="Share your goals here. Your can also per-complete the questionnare from to prepare for your consult. We will request it when we reach out!"
              />
            </div>

            <div className="flex flex-col space-y-1.5 w-full mb-5">
              <Label htmlFor="q1">
                If I am purchasing for you do you prefer Amazon, Container
                Store, Hobby Lobby, Walmart, Target, Home Goods, other?{" "}
                <span className="text-muted-foreground">(required)</span>{" "}
              </Label>
              <Textarea
                id="q1"
                placeholder="Share your goals here. Your can also per-complete the questionnare from to prepare for your consult. We will request it when we reach out!"
              />
            </div>

            <div className="flex flex-col space-y-1.5 w-full mb-5">
              <Label htmlFor="q1">
                For THIS project, which rooms/areas or items within certain
                rooms (bookshelves; hutches; desks; dressers) do you want me to
                work on?{" "}
              </Label>
              <Textarea
                id="q1"
                placeholder="Share your goals here. Your can also per-complete the questionnare from to prepare for your consult. We will request it when we reach out!"
              />
            </div>

            <RadioGroup className="mb-5">
              <Label htmlFor="q1">
                Do I have your permission to take before and after pictures of
                my work, as long as I {"don't"} show people or personal items,
                or personal identifying information?
                <div className="text-muted-foreground">(required)</div>{" "}
              </Label>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="r1" className="w-6 h-6" />
                <Label htmlFor="r1">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="r2" className="w-6 h-6" />
                <Label htmlFor="r2">No</Label>
              </div>
            </RadioGroup>

            <RadioGroup>
              <Label htmlFor="q1">
                Do I have your permission to take before and after pictures of
                my work, as long as I {"don't"} show people or personal items,
                or personal identifying information?
              </Label>
                <div className="text-muted-foreground text-sm">
                  We would love your feedback on Google reviews!
                </div>{" "}
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="r1" className="w-6 h-6" />
                <Label htmlFor="r1">Yes! Please remind me.</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="r2" className="w-6 h-6" />
                <Label htmlFor="r2">No, Thank you!</Label>
              </div>
            </RadioGroup>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button>Submit</Button>
      </CardFooter>
    </Card>
  );
}

export default QuestionnaireForm;
