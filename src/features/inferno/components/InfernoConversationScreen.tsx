import { Text, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import Episode2ConversationActions from '@/src/features/inferno/components/Episode2ConversationActions';
import InfernoChatList from '@/src/features/inferno/components/InfernoChatList';
import type { ChatRoom, InfernoChatMessage } from '@/src/features/inferno/types';
import BreadCharacter from '@/src/shared/ui/BreadCharacter';
import type { BreadTypeId } from '@/src/shared/types/bread';

export interface ConversationChoice {
  label: string;
  type: BreadTypeId;
}

interface InfernoConversationScreenProps {
  breadRows?: BreadTypeId[][];
  choices?: ConversationChoice[];
  description: string;
  messages: InfernoChatMessage[];
  onPressBackToSituation?: () => void;
  onPressNext: () => void;
  pair?: [BreadTypeId, BreadTypeId];
  room: ChatRoom;
  title: string;
}

function HeartIcon() {
  return (
    <Svg width={22} height={22} viewBox="0 0 24 24">
      <Path
        d="M12 21.4 10.55 20.08C5.4 15.42 2 12.34 2 8.55C2 5.47 4.42 3.05 7.5 3.05C9.24 3.05 10.91 3.86 12 5.14C13.09 3.86 14.76 3.05 16.5 3.05C19.58 3.05 22 5.47 22 8.55C22 12.34 18.6 15.42 13.45 20.09L12 21.4Z"
        fill="#FF0030"
      />
    </Svg>
  );
}

function BreadRows({ rows }: { rows: BreadTypeId[][] }) {
  return (
    <View className="w-64 gap-6">
      {rows.map((row) => (
        <View key={row.join('-')} className="flex-row justify-center gap-8">
          {row.map((bread) => (
            <BreadCharacter key={bread} type={bread} variant="dough" className="h-14 w-20" />
          ))}
        </View>
      ))}
    </View>
  );
}

function ChoiceCards({ choices }: { choices: ConversationChoice[] }) {
  return (
    <View className="w-64 flex-row flex-wrap justify-center gap-4">
      {choices.map((choice, index) => (
        <View
          key={choice.type}
          className={`w-28 items-center gap-1 rounded-xl border bg-default-card px-2 py-3 ${
            index === 0 ? 'border-yellow-400' : 'border-neutral-300'
          }`}
        >
          <BreadCharacter type={choice.type} variant="dough" className="h-10 w-14" />
          <Text className="font-yde-street-light text-body-xxs text-brown-1000 text-center">
            {choice.label}
          </Text>
        </View>
      ))}
    </View>
  );
}

function ConversationVisual({
  breadRows,
  choices,
  pair,
}: Pick<InfernoConversationScreenProps, 'breadRows' | 'choices' | 'pair'>) {
  if (pair) {
    return (
      <View className="h-28 flex-row items-center justify-center gap-7">
        <BreadCharacter type={pair[0]} variant="dough" className="h-14 w-20" />
        <HeartIcon />
        <BreadCharacter type={pair[1]} variant="dough" className="h-14 w-20" />
      </View>
    );
  }

  if (choices) {
    return <ChoiceCards choices={choices} />;
  }

  return <BreadRows rows={breadRows ?? []} />;
}

export default function InfernoConversationScreen({
  breadRows,
  choices,
  description,
  messages,
  onPressBackToSituation,
  onPressNext,
  pair,
  room,
  title,
}: InfernoConversationScreenProps) {
  return (
    <View className="flex-1 justify-center px-11">
      <View className="w-full flex-row items-center justify-between">
        <View className="w-[320px] gap-9">
          <View className="gap-2">
            <Text className="font-yde-street-bold text-heading-h2 text-default-black">{title}</Text>
            <Text className="font-yde-street-light text-body-s text-brown-1000">{description}</Text>
          </View>
          <ConversationVisual breadRows={breadRows} choices={choices} pair={pair} />
        </View>
        <InfernoChatList messages={messages} room={room} />
      </View>
      <Episode2ConversationActions
        onPressBackToSituation={onPressBackToSituation}
        onPressNext={onPressNext}
      />
    </View>
  );
}
