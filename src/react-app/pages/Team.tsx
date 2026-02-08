import { teamMembers } from "@/react-app/data/content";
import { Card, CardContent, CardHeader, CardTitle } from "@/react-app/components/ui/card";
import { Users } from "lucide-react";

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Our Team
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Meet the students behind this project
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <Card 
              key={index}
              className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center">
                  <Users className="w-12 h-12 text-indigo-600" />
                </div>
                <CardTitle className="text-lg">{member.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 bg-white rounded-2xl shadow-xl p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Project Information</h2>
          <p className="text-gray-600 mb-2">
            <strong>Project Title:</strong> Preparation of Ink
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Subject:</strong> Chemistry / Chemical Engineering
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Duration:</strong> Academic Year 2024-2025
          </p>
          <p className="text-gray-600 mt-6">
            This project explores the traditional method of preparing iron gall ink, 
            combining historical research with practical chemistry experiments.
          </p>
        </div>
      </div>
    </div>
  );
}
