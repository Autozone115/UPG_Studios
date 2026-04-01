from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, HRFlowable, Table, TableStyle
)
from reportlab.lib.enums import TA_LEFT, TA_CENTER

OUTPUT = "C:/Users/ramos/OneDrive/Documents/Portfolio/FigmaPort/public/Resume_Ramos.pdf"

# ── Palette ──────────────────────────────────────────────────────────────────
DARK      = colors.HexColor("#0f172a")
ACCENT    = colors.HexColor("#06b6d4")   # cyan
LIGHT_BG  = colors.HexColor("#f0f9ff")
MID_GRAY  = colors.HexColor("#64748b")
TEXT      = colors.HexColor("#1e293b")
TAG_BG    = colors.HexColor("#e0f2fe")
TAG_FG    = colors.HexColor("#0369a1")

# ── Styles ────────────────────────────────────────────────────────────────────
def styles():
    return {
        "name": ParagraphStyle(
            "name", fontName="Helvetica-Bold", fontSize=22,
            textColor=DARK, leading=26, spaceAfter=2
        ),
        "title": ParagraphStyle(
            "title", fontName="Helvetica", fontSize=11,
            textColor=ACCENT, leading=14, spaceAfter=4
        ),
        "contact": ParagraphStyle(
            "contact", fontName="Helvetica", fontSize=9,
            textColor=MID_GRAY, leading=12
        ),
        "section": ParagraphStyle(
            "section", fontName="Helvetica-Bold", fontSize=11,
            textColor=ACCENT, leading=14, spaceBefore=14, spaceAfter=4,
            textTransform="uppercase", letterSpacing=1
        ),
        "job_title": ParagraphStyle(
            "job_title", fontName="Helvetica-Bold", fontSize=10,
            textColor=TEXT, leading=14
        ),
        "job_meta": ParagraphStyle(
            "job_meta", fontName="Helvetica", fontSize=9,
            textColor=MID_GRAY, leading=12, spaceAfter=3
        ),
        "bullet": ParagraphStyle(
            "bullet", fontName="Helvetica", fontSize=9,
            textColor=TEXT, leading=13, leftIndent=12, spaceAfter=1,
            bulletIndent=0
        ),
        "body": ParagraphStyle(
            "body", fontName="Helvetica", fontSize=9,
            textColor=TEXT, leading=13, spaceAfter=4
        ),
        "edu_degree": ParagraphStyle(
            "edu_degree", fontName="Helvetica-Bold", fontSize=10,
            textColor=TEXT, leading=13
        ),
        "edu_sub": ParagraphStyle(
            "edu_sub", fontName="Helvetica-Oblique", fontSize=9,
            textColor=ACCENT, leading=12
        ),
        "edu_meta": ParagraphStyle(
            "edu_meta", fontName="Helvetica", fontSize=9,
            textColor=MID_GRAY, leading=12, spaceAfter=2
        ),
        "edu_desc": ParagraphStyle(
            "edu_desc", fontName="Helvetica", fontSize=9,
            textColor=TEXT, leading=12, spaceAfter=6
        ),
        "skill_cat": ParagraphStyle(
            "skill_cat", fontName="Helvetica-Bold", fontSize=9,
            textColor=TEXT, leading=12, spaceAfter=3
        ),
        "tag": ParagraphStyle(
            "tag", fontName="Helvetica", fontSize=8,
            textColor=TAG_FG, leading=10, backColor=TAG_BG,
            borderPadding=(2, 5, 2, 5)
        ),
        "achieve_bullet": ParagraphStyle(
            "achieve_bullet", fontName="Helvetica", fontSize=9,
            textColor=TEXT, leading=13, leftIndent=12, spaceAfter=2,
            bulletIndent=0
        ),
    }

def divider(color=ACCENT, thickness=0.8, space_before=0, space_after=6):
    return HRFlowable(
        width="100%", thickness=thickness,
        color=color, spaceAfter=space_after, spaceBefore=space_before
    )

def section_header(text, s):
    return [
        Paragraph(text, s["section"]),
        divider(ACCENT, 0.8, space_before=0, space_after=6),
    ]

def bullet_item(text, s):
    return Paragraph(f"<bullet>\u2022</bullet> {text}", s["bullet"])

# ── Build ─────────────────────────────────────────────────────────────────────
def build():
    doc = SimpleDocTemplate(
        OUTPUT,
        pagesize=letter,
        leftMargin=0.65*inch,
        rightMargin=0.65*inch,
        topMargin=0.6*inch,
        bottomMargin=0.6*inch,
    )

    s = styles()
    story = []

    # ── Header ────────────────────────────────────────────────────────────────
    story.append(Paragraph("Anival Ramos", s["name"]))
    story.append(Paragraph("VR/Game Developer &amp; 3D Artist", s["title"]))
    story.append(Paragraph(
        "ramosbusiness1818@gmail.com &nbsp;&nbsp;|&nbsp;&nbsp; Orem, UT &nbsp;&nbsp;|&nbsp;&nbsp; "
        "linkedin.com/in/anivalramos115",
        s["contact"]
    ))
    story.append(divider(ACCENT, 1.5, space_before=6, space_after=0))

    # ── Professional Summary ──────────────────────────────────────────────────
    story += section_header("Professional Summary", s)
    story.append(Paragraph(
        "Game Developer with 4+ years of experience building gameplay systems, interactive mechanics, "
        "and VR experiences in Unreal Engine. Published Meta Quest developer with strong expertise in "
        "Blueprint visual scripting. Experienced in developing end-to-end projects from concept to "
        "deployment, with a focus on gameplay systems, player interaction, and real-time performance.",
        s["body"]
    ))

    # ── Experience ────────────────────────────────────────────────────────────
    story += section_header("Experience", s)

    # Job 1
    story.append(Paragraph("VR/Game Developer", s["job_title"]))
    story.append(Paragraph("Freelance &nbsp;&bull;&nbsp; Remote &nbsp;&bull;&nbsp; 2025 – Present", s["job_meta"]))
    for b in [
        "Developed and published a VR training application on Meta Quest",
        "Built gameplay systems and interaction mechanics in Unreal Engine",
        "Developed VR systems with interactive controls and physics-based mechanics",
        "Created 3D assets and environments to support gameplay needs",
    ]:
        story.append(bullet_item(b, s))
    story.append(Spacer(1, 8))

    # Job 2
    story.append(Paragraph("Game Developer &amp; 3D Artist", s["job_title"]))
    story.append(Paragraph("Personal Portfolio &nbsp;&bull;&nbsp; Remote &nbsp;&bull;&nbsp; 2022 – Present", s["job_meta"]))
    for b in [
        "Built interactive simulations with gameplay systems and mechanics",
        "Developed control systems and player interaction mechanics",
        "Optimized performance for VR platforms and real-time rendering",
        "Created 3D assets including characters, vehicles, and environments",
    ]:
        story.append(bullet_item(b, s))

    # ── Education ─────────────────────────────────────────────────────────────
    story += section_header("Education", s)

    edu = [
        (
            "Bachelor of Science – Animation & Game Development",
            "Extended Reality (XR) Specialization",
            "Utah Valley University  |  Orem, UT  |  2022 – 2026",
            "Specialized in VR/AR development, Unreal Engine programming, interactive gameplay mechanics, and immersive experience design."
        ),
        (
            "3D Art & Digital Media",
            "Supporting Skillset for Game Development",
            "Utah Valley University  |  Orem, UT  |  2022 – 2026",
            "Focused on 3D modeling, texturing, lighting, and asset creation to support game development projects."
        ),
        (
            "Minor in Computer Science",
            "Technical Programming Foundation",
            "Utah Valley University  |  Orem, UT  |  2025 – 2026",
            "Strengthened programming fundamentals, algorithms, and software development practices to enhance game development capabilities."
        ),
    ]

    for degree, sub, meta, desc in edu:
        story.append(Paragraph(degree, s["edu_degree"]))
        story.append(Paragraph(sub, s["edu_sub"]))
        story.append(Paragraph(meta, s["edu_meta"]))
        story.append(Paragraph(desc, s["edu_desc"]))

    # ── Skills ────────────────────────────────────────────────────────────────
    story += section_header("Skills", s)

    skill_data = [
        ("VR Development",   ["Meta Quest", "Blueprint Visual Scripting", "Interactive Mechanics", "VR Optimization"]),
        ("Game Engines",     ["Unreal Engine", "MetaHuman Creator"]),
        ("3D Software",      ["Maya", "Blender", "ZBrush", "Substance Painter", "Substance Designer"]),
        ("Technical Skills", ["Gameplay Programming", "3D Modeling", "PBR Texturing", "Lighting", "Level Design"]),
    ]

    for cat, tags in skill_data:
        story.append(Paragraph(cat, s["skill_cat"]))
        tag_line = "  ".join(
            f'<font color="#0369a1" backColor="#e0f2fe"> {t} </font>' for t in tags
        )
        story.append(Paragraph(tag_line, ParagraphStyle(
            "tl", fontName="Helvetica", fontSize=8.5, leading=13, spaceAfter=6,
            textColor=TAG_FG
        )))

    # ── Key Achievements ──────────────────────────────────────────────────────
    story += section_header("Key Achievements", s)
    for a in [
        "Published a VR application on the Meta Quest platform",
        "Developed VR systems with interactive mechanics and user-driven interactions",
        "Built complete Unreal Engine projects from concept to deployment",
        "Designed and implemented gameplay systems using Unreal Engine Blueprints",
    ]:
        story.append(bullet_item(a, s))

    doc.build(story)
    print(f"PDF saved to: {OUTPUT}")

if __name__ == "__main__":
    build()
