import type { ReactNode } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ChatBubble from '@/src/features/inferno/components/ChatBubble';
import CatfishIntroCard from '@/src/features/inferno/components/CatfishIntroCard';
import EpisodeThumbnail from '@/src/features/inferno/components/EpisodeThumbnail';
import InfernoStartCard from '@/src/features/inferno/components/InfernoStartCard';
import DailyBalanceGameCard from '@/src/shared/components/DailyBalanceGameCard';
import MyProfileCard from '@/src/shared/components/MyProfileCard';
import BottomNav from '@/src/shared/ui/BottomNav';
import BreadCharacter from '@/src/shared/ui/BreadCharacter';
import ButterCharacter from '@/src/shared/ui/ButterCharacter';
import ChoiceButton from '@/src/shared/ui/ChoiceButton';
import CommentBubble from '@/src/shared/ui/CommentBubble';
import PrimaryButton from '@/src/shared/ui/PrimaryButton';
import { BREAD_TYPES } from '@/src/shared/types/bread';

interface SectionProps {
  title: string;
  children: ReactNode;
}

function Section({ title, children }: SectionProps) {
  return (
    <View className="gap-4">
      <Text className="font-yde-street-bold text-heading-h3 text-default-black">{title}</Text>
      <View className="items-center">{children}</View>
    </View>
  );
}

export default function ComponentShowcaseScreen() {
  return (
    <SafeAreaView className="flex-1 bg-default-bg" edges={['top', 'bottom']}>
      <ScrollView
        className="flex-1"
        contentContainerClassName="gap-10 p-6"
        showsVerticalScrollIndicator={false}
      >
        <Text className="font-yde-street-bold text-heading-h1 text-default-black">
          컴포넌트 모음
        </Text>

        <Section title="썸네일">
          <EpisodeThumbnail episodeNumber={1} title="러빈지옥에 오신걸 환영해요" />
        </Section>

        <Section title="일일 밸런스게임">
          <DailyBalanceGameCard
            question="Q. 오직 사랑만으로 결혼할 수 있다?!"
            optionALabel="가능하다"
            optionBLabel="불가능하다"
          />
        </Section>

        <Section title="myprofile">
          <View className="gap-4">
            <MyProfileCard status="noquestion" />
            <MyProfileCard status="default" breadType="donut" temperature={0} />
          </View>
        </Section>

        <Section title="nav">
          <BottomNav />
        </Section>

        <Section title="Button1">
          <ChoiceButton label="Button1" />
        </Section>

        <Section title="Button2">
          <PrimaryButton label="Button2" />
        </Section>

        <Section title="ovenchat">
          <View className="gap-2">
            <ChatBubble room="oven" sender="people" status="before" />
            <ChatBubble room="oven" sender="people" status="now" />
            <ChatBubble room="oven" sender="me" status="before" />
            <ChatBubble room="oven" sender="me" status="now" />
          </View>
        </Section>

        <Section title="trollycaht">
          <View className="gap-2">
            <ChatBubble room="trolley" sender="people" status="before" />
            <ChatBubble room="trolley" sender="people" status="now" />
            <ChatBubble room="trolley" sender="me" status="before" />
            <ChatBubble room="trolley" sender="me" status="now" />
          </View>
        </Section>

        <Section title="baked">
          <View className="flex-row flex-wrap gap-3">
            {BREAD_TYPES.map((bread) => (
              <BreadCharacter key={bread.id} type={bread.id} variant="baked" />
            ))}
          </View>
        </Section>

        <Section title="dough">
          <View className="flex-row flex-wrap gap-3">
            {BREAD_TYPES.map((bread) => (
              <BreadCharacter key={bread.id} type={bread.id} variant="dough" />
            ))}
          </View>
        </Section>

        <Section title="butter">
          <ButterCharacter />
        </Section>

        <Section title="러빈지옥 시작">
          <View className="gap-4">
            <InfernoStartCard status="idle" />
            <InfernoStartCard status="waiting" matchedCount={3} totalCount={6} />
          </View>
        </Section>

        <Section title="메기 등장 (가로 모드)">
          <ScrollView className="w-full" horizontal showsHorizontalScrollIndicator={false}>
            <CatfishIntroCard message='"안녕하세요 전 러빈지옥 패널이자 진행을 맡고있는 @@이에요!"' />
          </ScrollView>
        </Section>

        <Section title="comment">
          <View className="gap-3">
            <CommentBubble text="설명설명설명설명입니당" align="left" />
            <CommentBubble text="설명설명설명설명입니당" align="right" />
          </View>
        </Section>
      </ScrollView>
    </SafeAreaView>
  );
}
