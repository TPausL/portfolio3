import React, { CSSProperties } from "react";

// Asset imports
import ich from "../../assets/IchAsta.jpg";
import devlights from "../../assets/devlights.svg";
import gag from "../../assets/gag.png";
import tb from "../../assets/logo.png";
import pbl from "../../assets/LogoBlack.svg";
import td from "../../assets/Logo_TD.svg";
import mintec from "../../assets/mint-ec.png";
import hs from "../../assets/hs.png";
import irt from "../../assets/irt.png";
import metropolia from "../../assets/metropolia_s_white_eng.png";
import mobiletronics from "../../assets/mobiletronics.png";
import post from "../../assets/post.svg";
import pm from "../../assets/pm.svg";
import shelfMate from "../../assets/shelf-mate.png";
import rwth from "../../assets/rwth.svg";
import asta from "../../assets/asta_hsos.svg";
import tipela from "../../assets/tipela.jpg";
import alumni from "../../assets/mint-ec-alumni.png"

export type AnchorPositionType = "top" | "bottom" | "left" | "right" | "middle";

export type NodeColor =
    | "primary"
    | "secondary"
    | "error"
    | "warning"
    | "info"
    | "success"
    | "inherit"
    | string;

/**
 * Categories drive the color of the connecting lines and the ring around each node.
 * Use 6-digit hex values: the Graph appends an alpha suffix to dim lines.
 */
export type NodeCategory = "work" | "education" | "projects" | "volunteering";

export const categoryColors: Record<NodeCategory, string> = {
    work: "#ff6b4a",
    education: "#4cc9f0",
    projects: "#b794f6",
    volunteering: "#2bc017"
};

/**
 * Hierarchy level:
 * 0 = you (center)
 * 1 = main stations (employers, universities, school)
 * 2 = sub-items (dimmed until hover)
 * 3 = sub-sub-items (dimmed until hover)
 */
export type NodeLevel = 0 | 1 | 2 | 3;

export interface GraphRelationJSON {
    targetId: string;
    sourceAnchor: AnchorPositionType;
    targetAnchor: AnchorPositionType;
}

export interface GraphNodeJSON {
    id: string;
    label?: string;
    imageUrl?: string;
    fontSize?: string;
    radius: number;
    color?: NodeColor;
    x: number;
    y: number;
    tilt?: boolean;
    backContent?: React.ReactNode;
    relations: GraphRelationJSON[];
    transparent?: boolean;
    style?: CSSProperties;
    level: NodeLevel;
    category?: NodeCategory;
    /** One-word description shown under the circle. */
    caption?: string;
    /** If set, the caption becomes a link that opens in a new tab. */
    href?: string;
}

export const graphData: GraphNodeJSON[] = [
    // --- CENTER (YOU) ---
    {
        id: "center_timo",
        imageUrl: ich,
        label: "Timo Peters",
        radius: 10,
        level: 0,
        x: 50,
        y: 50,
        tilt: true,
        relations: [
            { targetId: "gag", sourceAnchor: "left", targetAnchor: "right" },
            { targetId: "hsos", sourceAnchor: "left", targetAnchor: "right" },
            { targetId: "rwth", sourceAnchor: "bottom", targetAnchor: "top" },
            { targetId: "mint_ec", sourceAnchor: "middle", targetAnchor: "bottom" },
            { targetId: "mobiletronics", sourceAnchor: "right", targetAnchor: "left" },
            { targetId: "deutsche_post", sourceAnchor: "right", targetAnchor: "left" },
            { targetId: "tipela", sourceAnchor: "right", targetAnchor: "left" },
        ],
    },

    // --- EDUCATION SIDE (LEFT) ---
    {
        id: "gag",
        imageUrl: gag,
        label: "Graf-Adolf-Gymnasium",
        fontSize: "10px",
        radius: 6,
        level: 1,
        caption: "Abitur",
        category: "education",
        backContent: (
            <div className="flex flex-col items-center gap-1.5 text-center">
                <p className="text-xs text-slate-300">Completed Abitur in 2022 with a strong focus on STEM subjects (Mathematik und Informatik LK).</p>
                <a href="/education#gag" className="mt-1 inline-flex items-center gap-1 rounded-md bg-slate-700/80 px-2.5 py-1 text-[11px] font-medium text-white transition-colors hover:bg-slate-600">
                    More on education →
                </a>
            </div>
        ),
        x: 31,
        y: 26,
        relations: [
            { targetId: "teckdigital", sourceAnchor: "middle", targetAnchor: "right" },
            { targetId: "devlights", sourceAnchor: "middle", targetAnchor: "right" },
        ],
    },
    {
        id: "teckdigital",
        label: "TECKdigital",
        fontSize: "10px",
        radius: 4.5,
        level: 2,
        caption: "Founder",
        category: "work",
        imageUrl: td,
        backContent: (
            <div className="flex flex-col items-center gap-1.5 text-center">
                <p className="text-xs text-slate-300">Founded a student enterprise focusing on digital custom hardware and software solutions.</p>
                <a href="/work#teckdigital" className="mt-1 inline-flex items-center gap-1 rounded-md bg-slate-700/80 px-2.5 py-1 text-[11px] font-medium text-white transition-colors hover:bg-slate-600">
                    More details →
                </a>
            </div>
        ),
        style: { width: "85%" },
        x: 21,
        y: 8,
        relations: [
            { targetId: "pbl", sourceAnchor: "middle", targetAnchor: "right" },
            { targetId: "teckboard", sourceAnchor: "middle", targetAnchor: "right" },
        ],
    },
    {
        id: "pbl",
        label: "PickByLight",
        fontSize: "9px",
        radius: 3.5,
        level: 3,
        caption: "Storage System",
        category: "projects",
        imageUrl: pbl,
        transparent: true,
        backContent: (
            <div className="flex flex-col items-center gap-1.5 text-center">
                <p className="text-xs text-slate-300">Digital pick-by-light storage management system designed for optimized order picking.</p>
                <a href="/projects#pbl" className="mt-1 inline-flex items-center gap-1 rounded-md bg-slate-700/80 px-2.5 py-1 text-[11px] font-medium text-white transition-colors hover:bg-slate-600">
                    More details →
                </a>
            </div>
        ),
        x: 6.5,
        y: 8,
        relations: [],
    },
    {
        id: "teckboard",
        label: "TECKboard",
        fontSize: "9px",
        radius: 3.5,
        level: 3,
        caption: "Infosystem",
        category: "projects",
        imageUrl: tb,
        backContent: (
            <div className="flex flex-col items-center gap-1.5 text-center">
                <p className="text-xs text-slate-300">Custom digital information and display system for semi-public spaces.</p>
                <a href="/projects#teckboard" className="mt-1 inline-flex items-center gap-1 rounded-md bg-slate-700/80 px-2.5 py-1 text-[11px] font-medium text-white transition-colors hover:bg-slate-600">
                    More details →
                </a>
            </div>
        ),
        x: 6.5,
        y: 24,
        relations: [],
    },
    {
        id: "devlights",
        label: "DevLights",
        fontSize: "10px",
        radius: 4,
        level: 2,
        caption: "Lighting",
        category: "projects",
        imageUrl: devlights,
        transparent: true,
        style: { height: "120%", width: "120%" },
        backContent: (
            <div className="flex flex-col items-center gap-1.5 text-center">
                <p className="text-xs text-slate-300">API-controlled intelligent lighting setup featuring custom firmware and integrations.</p>
                <a href="/projects#devlights" className="mt-1 inline-flex items-center gap-1 rounded-md bg-slate-700/80 px-2.5 py-1 text-[11px] font-medium text-white transition-colors hover:bg-slate-600">
                    View paper →
                </a>
            </div>
        ),
        x: 17,
        y: 43,
        relations: [],
    },
    {
        id: "hsos",
        label: "Hochschule Osnabrück",
        radius: 6,
        level: 1,
        caption: "Bachelor",
        category: "education",
        imageUrl: hs,
        style: { width: "90%" },
        backContent: (
            <div className="flex flex-col items-center gap-1.5 text-center">
                <p className="text-xs text-slate-300">
                    Completed Bachelor of Science in Mechatronics in 2025 with a strong focus on computer science.
                </p>                <a href="/education#hsos" className="mt-1 inline-flex items-center gap-1 rounded-md bg-slate-700/80 px-2.5 py-1 text-[11px] font-medium text-white transition-colors hover:bg-slate-600">
                    More on education →
                </a>
            </div>
        ),
        x: 31,
        y: 58,
        relations: [
            { targetId: "irte", sourceAnchor: "left", targetAnchor: "right" },
            { targetId: "metropolia", sourceAnchor: "middle", targetAnchor: "right" },
            { targetId: "asta", sourceAnchor: "bottom", targetAnchor: "middle" },
        ],
    },
    {
        id: "irte",
        label: "Ignition Racing Team",
        fontSize: "10px",
        radius: 4.5,
        level: 2,
        caption: "Racing Car",
        category: "projects",
        imageUrl: irt,
        style: { width: "75%" },
        backContent: (
            <div className="flex flex-col items-center gap-1.5 text-center">
                <p className="text-xs text-slate-300">Engineered hardware and control systems for a Formula Student racing car.</p>
                <a href="/projects#irte" className="mt-1 inline-flex items-center gap-1 rounded-md bg-slate-700/80 px-2.5 py-1 text-[11px] font-medium text-white transition-colors hover:bg-slate-600">
                    More details →
                </a>
            </div>
        ),
        x: 8,
        y: 58,
        relations: [],
    },
    {
        id: "metropolia",
        label: "Metropolia UAS",
        fontSize: "10px",
        radius: 4.5,
        level: 2,
        caption: "Semester Abroad",
        category: "education",
        imageUrl: metropolia,
        style: { width: "85%" },
        backContent: (
            <div className="flex flex-col items-center gap-1.5 text-center">
                <p className="text-xs text-slate-300">Completed an international semester abroad in Helsinki focusing on embedded computer science.</p>
                <a href="/education#metropolia" className="mt-1 inline-flex items-center gap-1 rounded-md bg-slate-700/80 px-2.5 py-1 text-[11px] font-medium text-white transition-colors hover:bg-slate-600">
                    More on education →
                </a>
            </div>
        ),
        x: 17,
        y: 74,
        relations: [{ targetId: "shelfmate", sourceAnchor: "left", targetAnchor: "middle" }],
    },
    {
        id: "asta",
        label: "AStA HSOS",
        fontSize: "14px",
        radius: 4.5,
        level: 2,
        category: "volunteering",
        imageUrl: asta,
        style: { width: "85%" },
        backContent: (
            <div className="flex flex-col items-center gap-1.5 text-center">
                <p className="text-xs text-slate-300">Served as the Referent for Mobility, advocating for student transport solutions.</p>
                <a href="/volunteering#asta" className="mt-1 inline-flex items-center gap-1 rounded-md bg-slate-700/80 px-2.5 py-1 text-[11px] font-medium text-white transition-colors hover:bg-slate-600">
                    More on volunteering →
                </a>
            </div>
        ),
        x: 31,
        y: 78,
        relations: [],
    },
    {
        id: "shelfmate",
        label: "ShelfMate",
        fontSize: "12px",
        radius: 3.5,
        level: 3,
        caption: "Pantry System",
        category: "projects",
        imageUrl: shelfMate,
        backContent: (
            <div className="flex flex-col items-center gap-1.5 text-center">
                <p className="text-xs text-slate-300">Smart IoT pantry management system developed during the stay in Helsinki.</p>
                <a href="/projects#shelfmate" className="mt-1 inline-flex items-center gap-1 rounded-md bg-slate-700/80 px-2.5 py-1 text-[11px] font-medium text-white transition-colors hover:bg-slate-600">
                    More details →
                </a>
            </div>
        ),
        x: 6.9,
        y: 89,
        relations: [],
    },
    {
        id: "rwth",
        label: "RWTH",
        radius: 6,
        level: 1,
        caption: "Master",
        category: "education",
        color: "white",
        imageUrl: rwth,
        backContent: (
            <div className="flex flex-col items-center gap-1.5 text-center">
                <p className="text-xs text-slate-300">Master of Science in Computer Science.</p>
                <a href="/education#rwth" className="mt-1 inline-flex items-center gap-1 rounded-md bg-slate-700/80 px-2.5 py-1 text-[11px] font-medium text-white transition-colors hover:bg-slate-600">
                    View Details →
                </a>
            </div>
        ),
        x: 50,
        y: 86,
        relations: [],
    },

    // --- WORK & EXPERIENCE SIDE (RIGHT) ---
    {
        id: "mint_ec",
        label: "MINT-EC",
        fontSize: "10px",
        radius: 4,
        level: 1,
        caption: "Certificate",
        category: "education",
        imageUrl: mintec,
        style: { width: "80%" },
        transparent: true,
        backContent: (
            <div className="flex flex-col items-center gap-1.5 text-center">
                <p className="text-xs text-slate-300">Excellence certificate awarded for exceptional performance in STEM topics beyond school subjects, like participating in student camps.</p>
                <a href="/education#gag" className="mt-1 inline-flex items-center gap-1 rounded-md bg-slate-700/80 px-2.5 py-1 text-[11px] font-medium text-white transition-colors hover:bg-slate-600">
                    More on education →
                </a>
            </div>
        ),
        x: 70,
        y: 9,
        relations: [{ targetId: "mint_ec_alumni", sourceAnchor: "right", targetAnchor: "middle" }],
    },
    {
        id: "mint_ec_alumni",
        label: "MINT-EC Alumni",
        fontSize: "10px",
        radius: 4,
        level: 2,
        caption: "",
        category: "volunteering",
        imageUrl: alumni,
        style: { width: "80%" },
        transparent: true,
        backContent: (
            <div className="flex flex-col items-center gap-1.5 text-center">
                <p className="text-xs text-slate-300">Supervising student camps within the MINT-EC Alumni network and leading the network as of October 2026.</p>
                <a href="/volunteering#mint_ec_alumni" className="mt-1 inline-flex items-center gap-1 rounded-md bg-slate-700/80 px-2.5 py-1 text-[11px] font-medium text-white transition-colors hover:bg-slate-600">
                    More on volunteering →
                </a>
            </div>
        ),
        x: 91,
        y: 9,
        relations: [],
    },
    {
        id: "mobiletronics",
        label: "MobileTronics",
        fontSize: "10px",
        radius: 6,
        level: 1,
        caption: "Working Student",
        category: "work",
        imageUrl: mobiletronics,
        style: { width: "85%" },
        backContent: (
            <div className="flex flex-col items-center gap-1.5 text-center">
                <p className="text-xs text-slate-300">Completed an internship focused on hardware-software co-design while working as a working student on website design, development, and administration.</p>
                <a href="/work#mobiletronics" className="mt-1 inline-flex items-center gap-1 rounded-md bg-slate-700/80 px-2.5 py-1 text-[11px] font-medium text-white transition-colors hover:bg-slate-600">
                    More on work experience →
                </a>
            </div>
        ),
        x: 76,
        y: 33,
        relations: [{ targetId: "bachelor_thesis", sourceAnchor: "right", targetAnchor: "left" }],
    },
    {
        id: "bachelor_thesis",
        label: "Bachelor thesis",
        fontSize: "9px",
        radius: 4,
        level: 2,
        category: "education",
        color: "#e76f51",
        backContent: (
            <div className="flex flex-col items-center gap-1.5 text-center">
                <p className="text-xs text-slate-300">Researched and authored the Mechatronics Bachelor Thesis working on integration positioning data into mobile work machines.</p>
                <a href="/education#hsos" className="mt-1 inline-flex items-center gap-1 rounded-md bg-slate-700/80 px-2.5 py-1 text-[11px] font-medium text-white transition-colors hover:bg-slate-600">
                    More on education →
                </a>
            </div>
        ),
        x: 92,
        y: 31,
        relations: [],
    },
    {
        id: "deutsche_post",
        label: "Deutsche Post",
        fontSize: "10px",
        radius: 6,
        level: 1,
        caption: "Experience",
        category: "work",
        imageUrl: post,
        color: "#ffcc00",
        backContent: (
            <div className="flex flex-col items-center gap-1.5 text-center">
                <p className="text-xs text-slate-300">Gained hands-on professional experience working within logistics operations.</p>
                <a href="/work#deutsche_post" className="mt-1 inline-flex items-center gap-1 rounded-md bg-slate-700/80 px-2.5 py-1 text-[11px] font-medium text-white transition-colors hover:bg-slate-600">
                    More on work experience →
                </a>
            </div>
        ),
        x: 80,
        y: 56,
        relations: [],
    },
    {
        id: "tipela",
        label: "Tipela",
        fontSize: "10px",
        radius: 6,
        level: 1,
        caption: "Founder",
        category: "work",
        imageUrl: tipela,
        backContent: (
            <div className="flex flex-col items-center gap-1.5 text-center">
                <p className="text-xs text-slate-300">Founded Tipela, a small business designing artistic accesories.</p>
                <a href="/work#tipela" className="mt-1 inline-flex items-center gap-1 rounded-md bg-slate-700/80 px-2.5 py-1 text-[11px] font-medium text-white transition-colors hover:bg-slate-600">
                    View details →
                </a>
            </div>
        ),
        x: 68,
        y: 80,
        relations: [
            { targetId: "printmanagement", sourceAnchor: "right", targetAnchor: "left" },
        ],
    },
    {
        id: "printmanagement",
        label: "PrintManagement",
        fontSize: "8px",
        radius: 4,
        level: 2,
        caption: "Custom ERP",
        category: "projects",
        imageUrl: pm,
        style: { width: "80%" },
        backContent: (
            <div className="flex flex-col items-center gap-1.5 text-center">
                <p className="text-xs text-slate-300">Developed an automated print workflow engine and tailored internal ERP system.</p>
                <a href="/projects#printmanagement" className="mt-1 inline-flex items-center gap-1 rounded-md bg-slate-700/80 px-2.5 py-1 text-[11px] font-medium text-white transition-colors hover:bg-slate-600">
                    More details →
                </a>
            </div>
        ),
        x: 89,
        y: 84,
        relations: [],
    },
];

export default graphData;