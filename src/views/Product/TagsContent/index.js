import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import { getTags, getTagsBySearch, groupTags } from 'store/Tags/actions';
import { OrganismCard, MoleculeSearchInput, AtomCheckBox, AtomNoDataCard } from 'components';

const TagsContent = ({ tags, getTags, groupTags, getTagsBySearch }) => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [isTagsActionDone, setIsTagsActionDone] = useState(false);

  useEffect(async () => {
    await groupTags();
    getTags();
    setIsTagsActionDone(true);
  }, []);

  const onCheckboxChanged = (item) => {
    setSelectedTags(
      item.value ? [...selectedTags, item] : [...selectedTags.filter(({ id }) => id !== item.id)],
    );
  };

  const onTagsSearch = (searchKey) => {
    getTagsBySearch(searchKey.toLowerCase());
  };

  return (
    <OrganismCard shadow title="tag.list" className="mb-4">
      <MoleculeSearchInput placeholder="Search Tag" className="mb-3" onChange={onTagsSearch} />
      <div className="overflow-auto py-2" style={{ maxHeight: '166px', paddingLeft: '2px' }}>
        {isTagsActionDone && tags.length ? (
          tags.map(({ tag, totalCount, value = false }) => (
            <AtomCheckBox
              key={tag}
              label={tag}
              value={value}
              labelSuffix={totalCount}
              onChange={(checked) => onCheckboxChanged({ totalCount, tag, value: checked })}
            />
          ))
        ) : (
          <AtomNoDataCard></AtomNoDataCard>
        )}
      </div>
    </OrganismCard>
  );
};

const mapStateToProps = ({ tags: { tags } }) => ({ tags });
export default connect(mapStateToProps, { groupTags, getTagsBySearch, getTags })(TagsContent);
