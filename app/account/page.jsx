'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent } from "@/components/ui/card"

const Page = () => {
  const [activeSection, setActiveSection] = useState('My Profile')

  const sidebarItems = [
    { title: 'My Profile', section: 'Manage My Account' },
    { title: 'Address Book', section: 'Manage My Account' },
    { title: 'My Payment Options', section: 'Manage My Account' },
    { title: 'My Orders', section: 'My Orders', link: "/orders" },
    { title: 'My Returns', section: 'My Orders', link: "/return" },
    { title: 'My Cancellations', section: 'My Orders', link: "/cancel" },
    { title: 'My WishList', section: 'My WishList', link: '/wishlist' },
  ]

  const ProfileSection = () => (
    <>
      <h2 className="text-2xl font-semibold mb-6">Edit Your Profile</h2>
      <form className="space-y-6 font-poppins">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="firstName">First Name</Label>
            <Input className="bg-[#F5F5F5]" id="firstName" placeholder="John" />
          </div>
          <div>
            <Label htmlFor="lastName">Last Name</Label>
            <Input className="bg-[#F5F5F5]" id="lastName"  placeholder="Doe" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input className="bg-[#F5F5F5]" id="email" type="email" placeholder="johndoe@email.com" />
          </div>
          <div>
            <Label htmlFor="address">Address</Label>
            <Input className="bg-[#F5F5F5]" id="address" placeholder="Kingston, 5236, United State" />
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Password Changes</h3>
          <div className="space-y-4">
            <div>
              <Label htmlFor="currentPassword">Current Password</Label>
              <Input className="bg-[#F5F5F5]" placeholder="Current Password" id="currentPassword" type="password" />
            </div>
            <div>
              <Label htmlFor="newPassword">New Password</Label>
              <Input className="bg-[#F5F5F5]" placeholder="New Password" id="newPassword" type="password" />
            </div>
            <div>
              <Label htmlFor="confirmPassword">Confirm New Password</Label>
              <Input className="bg-[#F5F5F5]" placeholder="Confirm New Password" id="confirmPassword" type="password" />
            </div>
          </div>
        </div>
        <div className="flex justify-end space-x-4">
          <Button variant="outline">Cancel</Button>
          <Button className="bg-bgsecondary hover:bg-bgsecondary/90">Save Changes</Button>
        </div>
      </form>
    </>
  )

  const AddressBookSection = () => (
    <>
      <h2 className="text-2xl font-semibold mb-6">Address Book</h2>
      <form className="space-y-6 font-poppins">
        <div>
          <Label htmlFor="fullName">Full Name</Label>
          <Input className="bg-[#F5F5F5]" placeholder="Full Name" id="fullName" />
        </div>
        <div>
          <Label htmlFor="addressLine1">Address Line 1</Label>
          <Input className="bg-[#F5F5F5]" placeholder="Address Line 1" id="addressLine1" />
        </div>
        <div>
          <Label htmlFor="addressLine2">Address Line 2 (Optional)</Label>
          <Input className="bg-[#F5F5F5]" placeholder="Address Line 2 (Optional)" id="addressLine2" />
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="city">City</Label>
            <Input className="bg-[#F5F5F5]" placeholder="City" id="city" />
          </div>
          <div>
            <Label htmlFor="state">State/Province</Label>
            <Input className="bg-[#F5F5F5]" placeholder="State/Province" id="state" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="zipCode">ZIP/Postal Code</Label>
            <Input className="bg-[#F5F5F5]" placeholder="ZIP/Postal Code" id="zipCode" />
          </div>
          <div>
            <Label htmlFor="country">Country</Label>
            <Input className="bg-[#F5F5F5]" id="country" placeholder="Country" />
          </div>
        </div>
        <div>
          <Label htmlFor="phoneNumber">Phone Number</Label>
          <Input className="bg-[#F5F5F5]" id="phoneNumber" placeholder="Phone Number" type="tel" />
        </div>
        <div className="flex justify-end space-x-4">
          <Button variant="outline">Cancel</Button>
          <Button className="bg-bgsecondary hover:bg-bgsecondary/90">Save Address</Button>
        </div>
      </form>
    </>
  )

  const PaymentOptionsSection = () => (
    <>
      <h2 className="text-2xl font-semibold mb-6">Payment Options</h2>
      <form className="space-y-6 font-poppins">
        <RadioGroup defaultValue="card">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="card" id="card" />
            <Label htmlFor="card">Credit/Debit Card</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="paypal" id="paypal" />
            <Label htmlFor="paypal">PayPal</Label>
          </div>
        </RadioGroup>
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input className="bg-[#F5F5F5]" id="cardNumber" placeholder="1234 5678 9012 3456" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="expiryDate">Expiry Date</Label>
                  <Input className="bg-[#F5F5F5]" id="expiryDate" placeholder="MM/YY" />
                </div>
                <div>
                  <Label htmlFor="cvv">CVV</Label>
                  <Input className="bg-[#F5F5F5]" id="cvv" placeholder="123" />
                </div>
              </div>
              <div>
                <Label htmlFor="nameOnCard">Name on Card</Label>
                <Input className="bg-[#F5F5F5]" placeholder="How the name show on the card" id="nameOnCard" />
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="flex justify-end space-x-4">
          <Button variant="outline">Cancel</Button>
          <Button className="bg-bgsecondary hover:bg-bgsecondary/90">Save Payment Method</Button>
        </div>
      </form>
    </>
  )

  const renderSection = () => {
    switch (activeSection) {
      case 'My Profile':
        return <ProfileSection />
      case 'Address Book':
        return <AddressBookSection />
      case 'My Payment Options':
        return <PaymentOptionsSection />
      default:
        return <ProfileSection />
    }
  }

  return (
    <div className="w-full px-[5%] grid gap-10 md:gap-20 min-h-[500px] py-10">
      <div className="flex items-center justify-between">
        <p className="font-poppins text-base md:text-lg">Home / My Account</p>
        <p className="font-poppins text-base md:text-lg">Welcome! <span className="text-bgsecondary">Matic Mania</span></p>
      </div>
      
      <div className="grid md:grid-cols-[250px_1fr] gap-8">
        <aside className="space-y-6">
          {['Manage My Account', 'My Orders', 'My WishList'].map((section) => (
            <div key={section}>
              <h3 className="font-semibold mb-2">{section}</h3>
              <ul className="space-y-2">
                {sidebarItems
                  .filter(item => item.section === section)
                  .map(item => (
                    <li 
                      key={item.title}
                      className={`cursor-pointer ${activeSection === item.title ? 'text-bgsecondary' : 'text-gray-600'}`}
                    >
                      {item.link ? (
                        <Link href={item.link} className="block w-full">
                          {item.title}
                        </Link>
                      ) : (
                        <span onClick={() => setActiveSection(item.title)}>
                          {item.title}
                        </span>
                      )}
                    </li>
                  ))
                }
              </ul>
            </div>
          ))}
        </aside>

        <main>
          {renderSection()}
        </main>
      </div>
    </div>
  )
}

export default Page