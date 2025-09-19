import React from 'react';
import { BookOpen, Calendar, Award, Trophy, Medal, ChevronRight } from 'lucide-react';

interface AwardProps {
    title: string;
    year?: string;
    description?: string;
    type?: 'academic' | 'contest';
    ranking?: {
        place: string | number;
        outOf?: string | number;
        level?: string;
    };
}

interface EducationItemProps {
    degree: string;
    school: string;
    period: string;
    description?: string;
    gpa?: string;
    awards?: AwardProps[];
}

const getRankingIcon = (place: string | number) => {
    const numericPlace = Number(place);
    switch (numericPlace) {
        case 1:
            return <Trophy className="w-4 h-4 text-yellow-400" />;
        case 2:
            return <Medal className="w-4 h-4 text-gray-300" />;
        case 3:
            return <Medal className="w-4 h-4 text-amber-700" />;
        default:
            return <Award className="w-4 h-4 text-blue-400" />;
    }
};

const formatRanking = (ranking: AwardProps['ranking']) => {
    if (!ranking) return '';
    const { place, outOf, level } = ranking;
    let rankText = typeof place === 'string' ? place : `${place}${getOrdinalSuffix(Number(place))} Place`;
    if (outOf) rankText += ` out of ${outOf}`;
    if (level) rankText += ` (${level})`;
    return rankText;
};

const getOrdinalSuffix = (n: number): string => {
    const s = ['th', 'st', 'nd', 'rd'];
    const v = n % 100;
    return s[(v - 20) % 10] || s[v] || s[0];
};

const AwardItem = ({ title, year, description, type = 'academic', ranking }: AwardProps) => (
    <div className="flex items-start space-x-2 pl-6 border-l border-gray-700">
        <div className="flex-shrink-0 mt-1">
            {type === 'contest' && ranking
                ? getRankingIcon(ranking.place)
                : <Award className="w-4 h-4 text-blue-400" />
            }
        </div>
        <div className="flex-1">
            <div className="flex items-start justify-between">
                <div>
                    <span className="text-gray-200">{title}</span>
                    {year && <span className="text-sm text-gray-400 ml-2">({year})</span>}
                </div>
            </div>
            {type === 'contest' && ranking && (
                <p className="text-sm text-blue-300 mt-1">
                    {formatRanking(ranking)}
                </p>
            )}
            {description && (
                <p className="text-sm text-gray-400 mt-1">{description}</p>
            )}
        </div>
    </div>
);

const EducationItem = ({ degree, school, period, description, gpa, awards }: EducationItemProps) => (
    <div className="backdrop-blur-md bg-gray-800/30 rounded-lg p-6 border border-gray-700/50">
        <div className="flex items-center space-x-2 mb-2">
            <BookOpen className="w-5 h-5 text-blue-400" />
            <h3 className="text-xl font-semibold text-white">{degree}</h3>
        </div>
        <p className="text-blue-300 mb-1">{school}</p>
        <div className="flex items-center space-x-2 text-gray-400 mb-3">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">{period}</span>
            {gpa && (
                <>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-sm">GPA: {gpa}</span>
                </>
            )}
        </div>
        {description && <p className="text-gray-300 mb-4">{description}</p>}

        {awards && awards.length > 0 && (
            <div className="mt-4 space-y-3">
                <h4 className="text-white font-medium mb-3">Awards & Achievements</h4>
                {awards.map((award, index) => (
                    <AwardItem key={index} {...award} />
                ))}
            </div>
        )}
    </div>
);

export const Education = () => {
    return (
        <section id="education" className="py-20">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">Education</h2>
                <div className="space-y-6">
                    <EducationItem
                        degree="Bachelor of Science in Computer Science"
                        school="National Tapei University"
                        period="2022 - 2026"
                        //gpa="3.92"
                        //description="Focused on mobile development and software engineering. Relevant coursework: iOS Development, Data Structures, Algorithms, Mobile Computing"
                        awards={[
                            {
                                title: "Dean's List",
                                year: "2025",
                                description: "2025年臺北大學電機資訊學院院長榮譽榜"
                            },
                            {
                                title: "Academic Excellence Award",
                                year: "Spring 2025",
                                description: "113學年度第二學期臺北大學資訊工程學系書卷獎"
                            },
                            {
                                title: "Undergraduate Scenior Project Contest",
                                description: "Our project, \"RGB-Only 3D Scene Reconstruction via Uncertainty-Aware 3D Gaussian SLAM\", won the second prize in the 2025 undergraduate project contest, Dept. of Computer Science and Information Engineering, National Taipei University",
                                type: "contest",
                                year: "June 2025",
                                ranking: {
                                    place: 2
                                }
                            },
                            {
                                title: "Academic Excellence Award",
                                year: "Fall 2024",
                                description: "113學年度第ㄧ學期臺北大學資訊工程學系書卷獎"
                            },
                            {
                                title: "Dean's List",
                                year: "2024",
                                description: "2024年臺北大學電機資訊學院院長榮譽榜"
                            },
                            {
                                title: "Academic Excellence Award",
                                year: "Spring 2024",
                                description: "112學年度第二學期臺北大學資訊工程學系書卷獎"
                            },
                            {
                                title: "Academic Excellence Award",
                                year: "Fall 2023",
                                description: "112學年度第一學期臺北大學資訊工程學系書卷獎"
                            },
                        ]}
                    />

                    <EducationItem
                        degree="High School Diploma"
                        school="The Affiliated Jhongli Senior High School of National Central University"
                        period="2019 - 2022"
                        awards={[
                            {
                                title: "Information Training Club",
                                year: "2020-2021",
                                description: "Served as an instructor at the programming camp organized by us and created coding problems to evaluate students' learning outcomes."
                            },
                            {
                                title: "高中數理及資訊學科能力競賽 - 資訊科",
                                type: "contest",
                                year: "2020",
                                ranking: {
                                    place: "Honorable Mention",
                                    level: "Northern Regional"
                                }
                            },
                            {
                                title: "校內數理及資訊學科能力競賽 - 資訊科",
                                type: "contest",
                                year: "2019",
                                ranking: {
                                    place: 1,
                                    level: "Local"
                                }
                            }
                        ]}
                    />
                </div>
            </div>
        </section>
    );
};

export default Education;
