

import { useState } from "react"
import { Calendar, Clock, Users, FileText, Settings, Bell } from "lucide-react"
import {Link} from "react-router-dom"

export default function ClinicManagementHomepage() {

  return (
  <div>  

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                Streamline Your Clinic Operations
              </h1>
              <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
                A comprehensive solution for managing appointments, patients, and medical records all in one place.
              </p>
              <div className="mt-10 flex justify-center">
                <div className="inline-flex rounded-md shadow">
                  <Link
                    to="#"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600"
                  >
                    Get Started
                  </Link>
                </div>
                <div className="ml-3 inline-flex">
                  <Link
                    to="#"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900">Powerful Features for Modern Clinics</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
                Everything you need to manage your clinic efficiently
              </p>
            </div>

            <div className="mt-16">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="pt-6">
                  <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-sm h-full">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                          <Calendar className="h-6 w-6 text-white" aria-hidden="true" />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Appointment Management</h3>
                      <p className="mt-5 text-base text-gray-500">
                        Schedule and manage appointments with an intuitive calendar interface. Send automated reminders
                        to reduce no-shows.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-sm h-full">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                          <Users className="h-6 w-6 text-white" aria-hidden="true" />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Patient Records</h3>
                      <p className="mt-5 text-base text-gray-500">
                        Maintain comprehensive patient records with medical history, prescriptions, and visit notes in a
                        secure environment.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-sm h-full">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                          <FileText className="h-6 w-6 text-white" aria-hidden="true" />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Billing & Invoicing</h3>
                      <p className="mt-5 text-base text-gray-500">
                        Generate invoices, track payments, and manage insurance claims with our integrated billing
                        system.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Intuitive Dashboard</h2>
                <p className="mt-3 max-w-3xl text-lg text-gray-500">
                  Get a complete overview of your clinic's operations at a glance. Monitor appointments, patient flow,
                  and key metrics from a single dashboard.
                </p>
                <div className="mt-8 sm:flex">
                  <div className="rounded-md shadow">
                    <Link
                      to="#"
                      className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600"
                    >
                      View Demo
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mt-8 lg:mt-0">
                <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                  <div className="p-4 bg-blue-500 text-white">
                    <div className="flex items-center">
                      <div className="flex-1">
                        <h3 className="text-lg font-medium">Clinic Dashboard</h3>
                      </div>
                      <div className="flex space-x-2">
                        <Bell className="h-5 w-5" />
                        <Settings className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-white p-4 rounded shadow">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-medium text-gray-500">Today's Appointments</h4>
                          <Calendar className="h-4 w-4 text-blue-500" />
                        </div>
                        <p className="text-2xl font-bold mt-2">24</p>
                      </div>
                      <div className="bg-white p-4 rounded shadow">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-medium text-gray-500">Patients Seen</h4>
                          <Users className="h-4 w-4 text-blue-500" />
                        </div>
                        <p className="text-2xl font-bold mt-2">18</p>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded shadow mb-4">
                      <h4 className="text-sm font-medium text-gray-500 mb-2">Upcoming Appointments</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                          <div>
                            <p className="font-medium">John Smith</p>
                            <p className="text-xs text-gray-500">General Checkup</p>
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>10:30 AM</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                          <div>
                            <p className="font-medium">Sarah Johnson</p>
                            <p className="text-xs text-gray-500">Follow-up</p>
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>11:15 AM</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                          <div>
                            <p className="font-medium">Michael Brown</p>
                            <p className="text-xs text-gray-500">Consultation</p>
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>1:00 PM</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-500">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">Ready to get started?</span>
              <span className="block text-blue-100">Start your free trial today.</span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <Link
                  to="#"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
                >
                  Get started
                </Link>
              </div>
              <div className="ml-3 inline-flex rounded-md shadow">
                <Link
                  to="#"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Contact sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

   
    </div>
  )
}

