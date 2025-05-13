import { GraduationCap, Briefcase, Calendar, MapPin, Award, ExternalLink, ChevronRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function EducationSection() {
  return (
    <div className="space-y-8">
      {/* Education Section */}
      <div className="mb-10">
        <div className="flex items-center mb-6">
          <div className="h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent flex-grow"></div>
          <h3 className="text-xl font-bold text-purple-200 px-4 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-purple-400" /> Education
          </h3>
          <div className="h-0.5 bg-gradient-to-l from-transparent via-purple-500 to-transparent flex-grow"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Education Card 1 */}
          <div className="bg-purple-800/20 backdrop-blur-sm border border-purple-500/30 rounded-xl overflow-hidden group hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all duration-300">
            <div className="bg-purple-700/30 p-4 flex justify-between items-center border-b border-purple-500/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-purple-600/50 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-purple-200" />
                </div>
                <div>
                  <h4 className="font-bold text-purple-100">Bachelor of Science</h4>
                  <p className="text-sm text-purple-300">Software Engineering</p>
                </div>
              </div>
              <Badge className="bg-purple-600 text-white border-none">
                <Calendar className="w-3 h-3 mr-1" /> 2020 - 2024
              </Badge>
            </div>

            <div className="p-5">
              <div className="flex items-start gap-2 mb-4">
                <MapPin className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-purple-200 font-medium">Tech University</p>
                  <p className="text-purple-300 text-sm">San Francisco, California</p>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-purple-100">
                  Specialized in game development and web technologies. Maintained a 3.8 GPA while participating in game
                  jams and hackathons.
                </p>
              </div>

              <div className="space-y-3">
                <div>
                  <h5 className="text-sm font-semibold text-purple-300 mb-2 flex items-center gap-1">
                    <ChevronRight className="w-4 h-4 text-purple-400" /> Key Courses
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-purple-700/20 text-purple-200 border-purple-500/30">
                      Data Structures
                    </Badge>
                    <Badge variant="outline" className="bg-purple-700/20 text-purple-200 border-purple-500/30">
                      Algorithms
                    </Badge>
                    <Badge variant="outline" className="bg-purple-700/20 text-purple-200 border-purple-500/30">
                      Game Design
                    </Badge>
                    <Badge variant="outline" className="bg-purple-700/20 text-purple-200 border-purple-500/30">
                      Web Development
                    </Badge>
                  </div>
                </div>

                <div>
                  <h5 className="text-sm font-semibold text-purple-300 mb-2 flex items-center gap-1">
                    <ChevronRight className="w-4 h-4 text-purple-400" /> Achievements
                  </h5>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-purple-400" />
                    <span className="text-purple-200 text-sm">Dean's List - All Semesters</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education Card 2 */}
          <div className="bg-purple-800/20 backdrop-blur-sm border border-purple-500/30 rounded-xl overflow-hidden group hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all duration-300">
            <div className="bg-purple-700/30 p-4 flex justify-between items-center border-b border-purple-500/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-purple-600/50 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-purple-200" />
                </div>
                <div>
                  <h4 className="font-bold text-purple-100">Game Development Bootcamp</h4>
                  <p className="text-sm text-purple-300">Intensive Program</p>
                </div>
              </div>
              <Badge className="bg-purple-600 text-white border-none">
                <Calendar className="w-3 h-3 mr-1" /> 2019
              </Badge>
            </div>

            <div className="p-5">
              <div className="flex items-start gap-2 mb-4">
                <MapPin className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-purple-200 font-medium">GameCraft Academy</p>
                  <p className="text-purple-300 text-sm">Online & In-person</p>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-purple-100">
                  Intensive 3-month program focused on Unity game development, 3D modeling, and game design principles.
                  Created a fully functional 2D platformer as capstone project.
                </p>
              </div>

              <div className="space-y-3">
                <div>
                  <h5 className="text-sm font-semibold text-purple-300 mb-2 flex items-center gap-1">
                    <ChevronRight className="w-4 h-4 text-purple-400" /> Technologies
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-purple-700/20 text-purple-200 border-purple-500/30">
                      Unity
                    </Badge>
                    <Badge variant="outline" className="bg-purple-700/20 text-purple-200 border-purple-500/30">
                      C#
                    </Badge>
                    <Badge variant="outline" className="bg-purple-700/20 text-purple-200 border-purple-500/30">
                      3D Modeling
                    </Badge>
                    <Badge variant="outline" className="bg-purple-700/20 text-purple-200 border-purple-500/30">
                      Game Physics
                    </Badge>
                  </div>
                </div>

                <div>
                  <h5 className="text-sm font-semibold text-purple-300 mb-2 flex items-center gap-1">
                    <ChevronRight className="w-4 h-4 text-purple-400" /> Final Project
                  </h5>
                  <Button variant="link" className="p-0 h-auto text-purple-400 hover:text-purple-300" asChild>
                    <a href="#" className="flex items-center gap-1">
                      <ExternalLink className="w-4 h-4" />
                      <span>View Capstone Project</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Work Experience Section */}
      <div>
        <div className="flex items-center mb-6">
          <div className="h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent flex-grow"></div>
          <h3 className="text-xl font-bold text-purple-200 px-4 flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-purple-400" /> Work Experience
          </h3>
          <div className="h-0.5 bg-gradient-to-l from-transparent via-purple-500 to-transparent flex-grow"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Work Experience Card 1 */}
          <div className="bg-purple-800/20 backdrop-blur-sm border border-purple-500/30 rounded-xl overflow-hidden group hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all duration-300">
            <div className="bg-purple-700/30 p-4 flex justify-between items-center border-b border-purple-500/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-purple-600/50 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-purple-200" />
                </div>
                <div>
                  <h4 className="font-bold text-purple-100">Junior Frontend Developer</h4>
                  <p className="text-sm text-purple-300">
                    <Badge variant="outline" className="border-purple-500/50 text-purple-300 text-xs">
                      Full-time
                    </Badge>
                  </p>
                </div>
              </div>
              <Badge className="bg-purple-600 text-white border-none">
                <Calendar className="w-3 h-3 mr-1" /> 2022 - Present
              </Badge>
            </div>

            <div className="p-5">
              <div className="flex items-start gap-2 mb-4">
                <MapPin className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-purple-200 font-medium">TechNova Studios</p>
                  <p className="text-purple-300 text-sm">Remote</p>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-purple-100">
                  Working on responsive web applications using React and Next.js. Collaborating with designers and
                  backend developers to create seamless user experiences.
                </p>
              </div>

              <div className="space-y-3">
                <div>
                  <h5 className="text-sm font-semibold text-purple-300 mb-2 flex items-center gap-1">
                    <ChevronRight className="w-4 h-4 text-purple-400" /> Key Responsibilities
                  </h5>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-1">
                    <li className="text-purple-100 text-sm flex items-start gap-1">
                      <div className="w-1 h-1 rounded-full bg-purple-400 mt-1.5"></div>
                      <span>Develop responsive web apps</span>
                    </li>
                    <li className="text-purple-100 text-sm flex items-start gap-1">
                      <div className="w-1 h-1 rounded-full bg-purple-400 mt-1.5"></div>
                      <span>Implement UI/UX designs</span>
                    </li>
                    <li className="text-purple-100 text-sm flex items-start gap-1">
                      <div className="w-1 h-1 rounded-full bg-purple-400 mt-1.5"></div>
                      <span>Optimize performance</span>
                    </li>
                    <li className="text-purple-100 text-sm flex items-start gap-1">
                      <div className="w-1 h-1 rounded-full bg-purple-400 mt-1.5"></div>
                      <span>Mentor junior developers</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h5 className="text-sm font-semibold text-purple-300 mb-2 flex items-center gap-1">
                    <ChevronRight className="w-4 h-4 text-purple-400" /> Technologies
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-purple-700/20 text-purple-200 border-purple-500/30">
                      React
                    </Badge>
                    <Badge variant="outline" className="bg-purple-700/20 text-purple-200 border-purple-500/30">
                      Next.js
                    </Badge>
                    <Badge variant="outline" className="bg-purple-700/20 text-purple-200 border-purple-500/30">
                      TypeScript
                    </Badge>
                    <Badge variant="outline" className="bg-purple-700/20 text-purple-200 border-purple-500/30">
                      Tailwind CSS
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Work Experience Card 2 */}
          <div className="bg-purple-800/20 backdrop-blur-sm border border-purple-500/30 rounded-xl overflow-hidden group hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all duration-300">
            <div className="bg-purple-700/30 p-4 flex justify-between items-center border-b border-purple-500/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-purple-600/50 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-purple-200" />
                </div>
                <div>
                  <h4 className="font-bold text-purple-100">Game Development Intern</h4>
                  <p className="text-sm text-purple-300">
                    <Badge variant="outline" className="border-purple-500/50 text-purple-300 text-xs">
                      Internship
                    </Badge>
                  </p>
                </div>
              </div>
              <Badge className="bg-purple-600 text-white border-none">
                <Calendar className="w-3 h-3 mr-1" /> 2021 (6 months)
              </Badge>
            </div>

            <div className="p-5">
              <div className="flex items-start gap-2 mb-4">
                <MapPin className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-purple-200 font-medium">PixelPulse Games</p>
                  <p className="text-purple-300 text-sm">Austin, Texas</p>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-purple-100">
                  Assisted in developing a 2D platformer game, focusing on game mechanics, pixel art assets, and UI
                  elements.
                </p>
              </div>

              <div className="space-y-3">
                <div>
                  <h5 className="text-sm font-semibold text-purple-300 mb-2 flex items-center gap-1">
                    <ChevronRight className="w-4 h-4 text-purple-400" /> Key Responsibilities
                  </h5>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-1">
                    <li className="text-purple-100 text-sm flex items-start gap-1">
                      <div className="w-1 h-1 rounded-full bg-purple-400 mt-1.5"></div>
                      <span>Develop game mechanics</span>
                    </li>
                    <li className="text-purple-100 text-sm flex items-start gap-1">
                      <div className="w-1 h-1 rounded-full bg-purple-400 mt-1.5"></div>
                      <span>Create pixel art assets</span>
                    </li>
                    <li className="text-purple-100 text-sm flex items-start gap-1">
                      <div className="w-1 h-1 rounded-full bg-purple-400 mt-1.5"></div>
                      <span>Implement UI elements</span>
                    </li>
                    <li className="text-purple-100 text-sm flex items-start gap-1">
                      <div className="w-1 h-1 rounded-full bg-purple-400 mt-1.5"></div>
                      <span>Playtest and fix bugs</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h5 className="text-sm font-semibold text-purple-300 mb-2 flex items-center gap-1">
                    <ChevronRight className="w-4 h-4 text-purple-400" /> Achievement
                  </h5>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-purple-400" />
                      <span className="text-purple-200 text-sm">Featured in Indie Game Showcase 2021</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
