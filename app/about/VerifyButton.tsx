"use client"

import { FiFileText } from "react-icons/fi"

export default function VerifyButton() {
  return (
    <button
      onClick={() => window.open('https://udyamregistration.gov.in/Udyam_Verify.aspx', '_blank')}
      className="inline-flex items-center gap-2 px-6 py-2 bg-olive text-white rounded-lg hover:bg-olive/90 transition text-sm"
    >
      <FiFileText /> Verify MSME Status
    </button>
  )
}
