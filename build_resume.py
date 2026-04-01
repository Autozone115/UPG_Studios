from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.units import inch
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_LEFT

CYAN = colors.HexColor('#00B4C8')
BLACK = colors.HexColor('#1A1A1A')
DARK_GRAY = colors.HexColor('#555555')

output_path = r"D:\AnivalWorkInfo\ProCareer\Resume_Anival_Ramos_1Page.pdf"

doc = SimpleDocTemplate(
    output_path,
    pagesize=letter,
    rightMargin=0.55 * inch,
    leftMargin=0.55 * inch,
    topMargin=0.45 * inch,
    bottomMargin=0.45 * inch,
)

def style(name, **kwargs):
    base = {
        'fontName': 'Helvetica',
        'fontSize': 10,
        'textColor': BLACK,
        'spaceAfter': 0,
        'spaceBefore': 0,
        'leading': 13,
    }
    base.update(kwargs)
    return ParagraphStyle(name, **base)

name_s     = style('name',     fontName='Helvetica-Bold', fontSize=26, leading=30, textColor=colors.HexColor('#111111'))
title_s    = style('title',    fontSize=12, textColor=CYAN, leading=15, spaceAfter=2)
contact_s  = style('contact',  fontSize=9.5, textColor=DARK_GRAY, leading=12, spaceAfter=5)
sec_s      = style('sec',      fontName='Helvetica-Bold', fontSize=10.5, textColor=CYAN, spaceBefore=13, spaceAfter=2, leading=13)
job_s      = style('job',      fontName='Helvetica-Bold', fontSize=10, spaceBefore=8, spaceAfter=2, leading=13)
meta_s     = style('meta',     fontSize=9, textColor=DARK_GRAY, spaceAfter=3, leading=12)
bullet_s   = style('bullet',   fontSize=9.5, leftIndent=12, spaceAfter=3, leading=13)
edu_it_s   = style('edu_it',   fontName='Helvetica-Oblique', fontSize=9, textColor=CYAN, spaceAfter=2, leading=11)
cat_s      = style('cat',      fontName='Helvetica-Bold', fontSize=9.5, spaceBefore=6, spaceAfter=1, leading=12)
tags_s     = style('tags',     fontSize=9.5, textColor=CYAN, spaceAfter=3, leading=12)
body_s     = style('body',     fontSize=9.5, leading=14, spaceAfter=4)

def hr(gap_before=2, gap_after=5):
    return HRFlowable(width="100%", thickness=0.6, color=CYAN, spaceBefore=gap_before, spaceAfter=gap_after)

def section(title):
    return [Paragraph(title, sec_s), hr()]

def bullets(items):
    return [Paragraph(f"\u2022  {b}", bullet_s) for b in items]

story = []

# ── Header ────────────────────────────────────────────────────────────────────
story.append(Paragraph("Anival Ramos", name_s))
story.append(Paragraph("VR/Game Developer &amp; 3D Artist", title_s))
story.append(Paragraph(
    "ramosbusiness1818@gmail.com  |  Orem, UT  |  linkedin.com/in/anivalramos115",
    contact_s
))
story.append(hr(gap_before=3, gap_after=4))

# ── Professional Summary ──────────────────────────────────────────────────────
story += section("PROFESSIONAL SUMMARY")
story.append(Paragraph(
    "Game Developer with 4+ years of experience building gameplay systems, interactive mechanics, and VR experiences "
    "in Unreal Engine. Published Meta Quest developer with strong expertise in Blueprint visual scripting. Experienced "
    "in developing end-to-end projects from concept to deployment, with a focus on gameplay systems, player interaction, "
    "and real-time performance.",
    body_s
))

# ── Experience ────────────────────────────────────────────────────────────────
story += section("EXPERIENCE")

story.append(Paragraph("VR/Game Developer", job_s))
story.append(Paragraph("Freelance  \u2022  Remote  \u2022  2025 \u2013 Present", meta_s))
story += bullets([
    "Developed and published a VR training application on Meta Quest",
    "Built gameplay systems and interaction mechanics in Unreal Engine",
    "Developed VR systems with interactive controls and physics-based mechanics",
    "Created 3D assets and environments to support gameplay needs",
])

story.append(Paragraph("Game Developer &amp; 3D Artist", job_s))
story.append(Paragraph("Personal Portfolio  \u2022  Remote  \u2022  2022 \u2013 Present", meta_s))
story += bullets([
    "Built interactive simulations with gameplay systems and mechanics",
    "Developed control systems and player interaction mechanics",
    "Optimized performance for VR platforms and real-time rendering",
    "Created 3D assets including characters, vehicles, and environments",
])

# ── Education ─────────────────────────────────────────────────────────────────
story += section("EDUCATION")

story.append(Paragraph("Bachelor of Science \u2013 Animation &amp; Game Development", job_s))
story.append(Paragraph("Extended Reality (XR) Specialization", edu_it_s))
story.append(Paragraph("Utah Valley University  |  Orem, UT  |  2022 \u2013 2026", meta_s))

story.append(Paragraph("3D Art &amp; Digital Media", job_s))
story.append(Paragraph("Supporting Skillset for Game Development", edu_it_s))
story.append(Paragraph("Utah Valley University  |  Orem, UT  |  2022 \u2013 2026", meta_s))

story.append(Paragraph("Minor in Computer Science", job_s))
story.append(Paragraph("Technical Programming Foundation", edu_it_s))
story.append(Paragraph("Utah Valley University  |  Orem, UT  |  2025 \u2013 2026", meta_s))

# ── Skills ────────────────────────────────────────────────────────────────────
story += section("SKILLS")

story.append(Paragraph("VR Development", cat_s))
story.append(Paragraph("Meta Quest  \u2022  Blueprint Visual Scripting  \u2022  Interactive Mechanics  \u2022  VR Optimization", tags_s))

story.append(Paragraph("Game Engines", cat_s))
story.append(Paragraph("Unreal Engine  \u2022  MetaHuman Creator", tags_s))

story.append(Paragraph("3D Software", cat_s))
story.append(Paragraph("Maya  \u2022  Blender  \u2022  ZBrush  \u2022  Substance Painter  \u2022  Substance Designer", tags_s))

story.append(Paragraph("Technical Skills", cat_s))
story.append(Paragraph("Gameplay Programming  \u2022  3D Modeling  \u2022  PBR Texturing  \u2022  Lighting  \u2022  Level Design", tags_s))

doc.build(story)
print("PDF written to:", output_path)
