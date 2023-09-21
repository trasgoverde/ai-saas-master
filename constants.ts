
import { Mail, Webhook, LayoutDashboard, MessageSquare, FileEdit, Settings, Linkedin } from "lucide-react";

export const MAX_FREE_COUNTS = 5;

export const tools = [
  {
    label: 'Pdf Chat',
    icon: MessageSquare,
    href: '/conversation',
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: 'Email Generation',
    icon: Mail,
    href: '/music',
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    label: 'Linkedin Post Generation',
    icon: Linkedin,
    color: "text-blue-700",
    bgColor: "bg-blue-700/10",
    href: '/image',
  },
  {
    label: 'Blog Content Generation',
    icon: FileEdit,
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
    href: '/video',
  },
  {
    label: 'SEO & Content Generation',
    icon: Webhook,
    color: "text-green-700",
    bgColor: "bg-green-700/10",
    href: '/code',
  },
];
