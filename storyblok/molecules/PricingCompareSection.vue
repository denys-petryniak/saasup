<script setup lang="ts">
import type { PricingCompareSectionStoryblok } from '~/component-types-sb'

interface Props {
  blok: PricingCompareSectionStoryblok
}

defineProps<Props>()

type FeatureStatus = '+' | '-'

function isFeatureAvailableOrUnavailable(value: string): value is FeatureStatus {
  return value === '+' || value === '-'
}

function iconDynamicClassName(value: FeatureStatus): string {
  return value === '+' ? 'table__icon--available' : 'table__icon--unavailable'
}

const iconNames: Record<FeatureStatus, string> = {
  '+': 'material-symbols:check-circle-rounded',
  '-': 'material-symbols:cancel-outline',
}

function iconName(status: '+' | '-'): string {
  return iconNames[status]
}

type PricingPlanButtons = 'pricing_basic_button' | 'pricing_advanced_button' | 'pricing_business_button'

const localePath = useLocalePath()

const pricingPlanLinks: Record<PricingPlanButtons, string> = {
  pricing_basic_button: localePath('/pricing/basic'),
  pricing_advanced_button: localePath('/pricing/advanced'),
  pricing_business_button: localePath('/pricing/business'),
}

function isPricingPlanButtons(value: string): value is PricingPlanButtons {
  return Object.keys(pricingPlanLinks).includes(value)
}
</script>

<template>
  <BaseSection
    v-editable="blok"
    class="pricing-compare-section"
  >
    <div class="pricing-compare-section__body">
      <ContentBlock
        v-if="blok.heading"
        :headline="blok.headline"
        :title="blok.heading"
        :title-level="blok.heading_level"
      />
      <div v-if="blok.table" class="pricing-compare-section__table-box">
        <table class="table pricing-compare-section__table">
          <thead v-if="blok.table.thead">
            <tr>
              <th v-for="cell in blok.table.thead" :key="cell._uid">
                {{ cell.value }}
              </th>
            </tr>
          </thead>
          <tbody v-if="blok.table.tbody">
            <tr v-for="row in blok.table.tbody" :key="row._uid">
              <td v-for="cell in row.body" :key="cell._uid">
                <Icon
                  v-if="cell.value && isFeatureAvailableOrUnavailable(cell.value)"
                  :name="iconName(cell.value as FeatureStatus)"
                  :class="iconDynamicClassName(cell.value as FeatureStatus)"
                  class="table__icon"
                  size="1.5em"
                />
                <BaseButton
                  v-else-if="cell.value && isPricingPlanButtons(cell.value as PricingPlanButtons)"
                  :to="pricingPlanLinks[cell.value as PricingPlanButtons]"
                  color="dark-branded"
                >
                  {{ $t('button.get_started') }}
                </BaseButton>
                <template v-else>
                  {{ cell.value }}
                </template>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </BaseSection>
</template>

<style scoped lang="scss">
.pricing-compare-section {
  &__table-box {
    margin-top: clamped($min-size: $gap--sm, $max-size: $gap--md);
    border-radius: calc($rounded--3xl * 2);
    overflow-x: auto;
  }

  &__table {
    width: 100%;
  }
}

.table {
  border-collapse: collapse;

  td {
    padding: clamped($min-size: $spacing--lg, $max-size: $spacing--2xl)
      clamped($min-size: $spacing--4xl, $max-size: $spacing--8xl);
    text-align: center;
  }

  thead {
    border-bottom: 1px solid $divider-color--regular;

    th {
      padding: clamped($min-size: $spacing--4xl, $max-size: $spacing--8xl)
        clamped($min-size: $spacing--4xl, $max-size: $spacing--8xl);
      @include fluid-typography(
        $min-font-size: $text--3xl,
        $max-font-size: $text--4xl,
        $min-line-height: $leading--none,
        $max-line-height: $leading--tight
      );
      font-weight: $font--extrabold;
      color: $primary-color--dark;
      background-color: $secondary-color--extra-light;
    }
  }

  tbody {
    tr {
      &:nth-child(even) {
        background-color: $secondary-color--extra-light;
      }

      &:nth-child(odd) {
        background-color: $color-white;
      }
    }
  }

  &__icon {
    &--available {
      color: $icon-color--enabled;
    }

    &--unavailable {
      color: $icon-color--disabled;
    }
  }
}
</style>
