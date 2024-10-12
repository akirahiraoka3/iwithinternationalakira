import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export const ContactSection = ({ contactRef, isChecked, setIsChecked }) => (
  <section id="contact" className="container mx-auto px-4 py-16" ref={contactRef}>
    <h2 className="text-3xl font-bold mb-8 text-center">お問い合わせ</h2>
    <form className="max-w-md mx-auto">
      <div className="mb-4">
        <Input type="text" placeholder="お名前" required />
      </div>
      <div className="mb-4">
        <Input type="email" placeholder="メールアドレス" required />
      </div>
      <div className="mb-4">
        <Input type="tel" placeholder="電話番号" />
      </div>
      <div className="mb-4 space-y-2">
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="freeConsultation" 
            checked={isChecked}
            onCheckedChange={(checked) => setIsChecked(checked)}
          />
          <Label htmlFor="freeConsultation">無料相談を予約する</Label>
        </div>
      </div>
      <div className="mb-4 space-y-2">
        <Label>ご相談内容</Label>
        {['internship', 'workingholiday_language', 'university', 'other'].map((program) => (
          <div key={program} className="flex items-center space-x-2">
            <Checkbox id={program} />
            <Label htmlFor={program}>
              {program === 'internship' ? '海外インターンシップ' :
               program === 'workingholiday_language' ? 'ワーキングホリデー・語学留学' :
               program === 'university' ? '高校・大学への留学' : 'その他'}
            </Label>
          </div>
        ))}
      </div>
      <div className="mb-4">
        <Textarea placeholder="メッセージ" className="w-full" rows={4} />
      </div>
      <Button type="submit" className="w-full">送信</Button>
    </form>
  </section>
);