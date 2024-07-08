import { BrowserRouter, Route, Routes } from "react-router-dom"

import { DataPage } from "../pages"
import { DepartmentList } from "../components/DepartmentList"
import { ProtectedRoute } from "./ProtectedRoute"
import { UserForm } from "../components"

export const AppRoute = () => {
  return (
	<BrowserRouter>
      <Routes>
        <Route path="/" element={<UserForm />} />
        <Route
          path="/data"
          element={
            <ProtectedRoute>
              <div>
                <DataPage />
                <DepartmentList />
              </div>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
