export type LeadStatus = 'new' | 'contacted' | 'converted' | 'lost';
export type Lead = { id:string; name:string; email:string; phone:string; business_name:string; service_needed:string; budget:string; timeline:string; message:string; status:LeadStatus; admin_notes?:string; created_at:string; updated_at?:string; };
export type BlogPost = { id:string; title:string; slug:string; excerpt:string; content:string; cover_image?:string; status:'draft'|'published'; seo_title?:string; seo_description?:string; created_at:string; updated_at?:string; };
export type PortfolioProject = { id:string; title:string; slug:string; industry:string; summary:string; challenge:string; solution:string; results:string; image_url?:string; status:'draft'|'published'; created_at:string; updated_at?:string; };
export type Testimonial = { id:string; name:string; role:string; company:string; quote:string; rating:number; status:'draft'|'published'; created_at:string; };
export type PricingPlan = { id:string; name:string; price:number; description:string; features:string[]; popular:boolean; status:'active'|'hidden'; created_at:string; };
