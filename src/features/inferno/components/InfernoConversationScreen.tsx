import { useState } from 'react';
import { Text, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import ConversationChoiceCards, {
  type ConversationChoice,
} from '@/src/features/inferno/components/ConversationChoiceCards';
import Episode2ConversationActions from '@/src/features/inferno/components/Episode2ConversationActions';
import InfernoChatList from '@/src/features/inferno/components/InfernoChatList';
import { getCastMember } from '@/src/features/inferno/data/castMembers';
import type { ChatRoom, InfernoChatMessage } from '@/src/features/inferno/types';
import BreadCharacter from '@/src/shared/ui/BreadCharacter';
import type { BreadTypeId } from '@/src/shared/types/bread';

export type { ConversationChoice };

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
    <View className="gap-6">
      {rows.map((row) => (
        <View key={row.join('-')} className="flex-row justify-start gap-8">
          {row.map((bread) => (
            <BreadCharacter key={bread} type={bread} variant="dough" className="h-14 w-20" />
          ))}
        </View>
      ))}
    </View>
  );
}

function ConversationVisual({
  breadRows,
  choices,
  pair,
  selectedChoiceType,
  onSelectChoice,
}: Pick<InfernoConversationScreenProps, 'breadRows' | 'choices' | 'pair'> & {
  selectedChoiceType?: BreadTypeId;
  onSelectChoice: (type: BreadTypeId) => void;
}) {
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
    return (
      <ConversationChoiceCards choices={choices} selectedType={selectedChoiceType} onSelectChoice={onSelectChoice} />
    );
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
  const [selectedChoiceType, setSelectedChoiceType] = useState<BreadTypeId | undefined>(
    choices?.[0]?.type,
  );

  const selectedMember = choices && selectedChoiceType ? getCastMember(selectedChoiceType) : undefined;

  const displayMessages = selectedMember
    ? messages.map((message) =>
        message.mine ? { ...message, sender: `${selectedMember.adjective} ${selectedMember.name} 반죽` } : message,
      )
    : messages;

  return (
    <View className="flex-1 items-center justify-center px-8">
      <View className="w-full max-w-3xl flex-row items-center justify-between">
        <View className="w-[320px] gap-9">
          <View className="gap-1">
            <Text className="font-yde-street-bold text-heading-h2 text-default-black">{title}</Text>
            <Text className="font-yde-street-light text-body-s text-brown-1000">{description}</Text>
          </View>
          <ConversationVisual
            breadRows={breadRows}
            choices={choices}
            pair={pair}
            selectedChoiceType={selectedChoiceType}
            onSelectChoice={setSelectedChoiceType}
          />
        </View>
        <InfernoChatList messages={displayMessages} room={room} />
      </View>
      <Episode2ConversationActions
        onPressBackToSituation={onPressBackToSituation}
        onPressNext={onPressNext}
      />
    </View>
  );
}
